const axios = require('axios');

/* News Analysis Service */

/**
 * Fetch disaster-related news for a city using GNews API
 * @param {string} city - City name
 * @returns {Promise<Array>} Array of news articles
 */
async function fetchDisasterNews(city) {
    try {
        const GNEWS_API_KEY = process.env.GNEWS_API_KEY;

        if (!GNEWS_API_KEY) {
            console.warn('GNews API key not configured');
            return [];
        }

        // Search for disaster-related keywords + city
        const keywords = `${city} (disaster OR earthquake OR flood OR landslide OR cyclone OR fire OR accident OR fog OR storm OR emergency)`;

        const response = await axios.get('https://gnews.io/api/v4/search', {
            params: {
                q: keywords,
                lang: 'en',
                country: 'in', // for india
                max: 3, // it get top 5 articles
                apikey: GNEWS_API_KEY,
                sortby: 'publishedAt' // Most recent first
            },
            timeout: 8000
        });
        console.log(response.data.articles)
        return response.data.articles || [];
    } catch (error) {
        console.error('Error fetching news from GNews:', error.message);
        return [];
    }
}

/**
 * Analyze news articles using Groq AI to detect disasters and severity
 * @param {Array} articles - News articles
 * @param {string} city - City name
 * @returns {Promise<Object>} Analysis result with events and risk score
 */
async function analyzeNewsWithAI(articles, city) {
    try {
        const GROQ_API_KEY = process.env.GROQ_API_KEY;

        if (!GROQ_API_KEY) {
            console.warn('Groq API key not configured');
            return { events: [], score: 0, confidence: 0 };
        }

        if (!articles || articles.length === 0) {
            return { events: [], score: 0, confidence: 0 };
        }

        // Prepare news summary for AI
        const newsSummary = articles.map((article, idx) =>
            `${idx + 1}. ${article.title} - ${article.description || ''}`
        ).join('\n');

        // AI Prompt
        const prompt = `You are a disaster risk analyst. Analyze these recent news articles about ${city} and identify any disaster-related events (earthquakes, floods, landslides, fires, fog, accidents, storms, cyclones, etc.).

News Articles:
${newsSummary}

For each disaster event found, provide:
1. Event type (e.g., "Landslide", "Dense Fog", "Flood", "Accident")
2. Severity score (1-10, where 10 is catastrophic)
3. Brief reason

If NO disaster events are found, respond with: "NO_DISASTERS_FOUND"

Format your response as JSON:
{
  "events": [
    {"type": "Event Type", "severity": 8, "reason": "Brief explanation"}
  ],
  "overallRisk": 7.5
}

If no disasters found, return:
{"events": [], "overallRisk": 0}`;

        // Call Groq API
        const response = await axios.post(
            'https://api.groq.com/openai/v1/chat/completions',
            {
                model: 'llama-3.3-70b-versatile', // Fast and accurate
                messages: [
                    {
                        role: 'system',
                        content: 'You are a disaster risk analysis expert. Always respond with valid JSON only.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.3, // Low temperature for consistent analysis
                max_tokens: 500
            },
            {
                headers: {
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                timeout: 10000
            }
        );

        const aiResponse = response.data.choices[0].message.content;
        console.log("AI Response: \n", aiResponse);
        // Parse AI response
        let analysis;
        try {
            // Try to extract JSON from response
            const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                analysis = JSON.parse(jsonMatch[0]);
            } else {
                analysis = { events: [], overallRisk: 0 };
            }
        } catch (parseError) {
            console.error('Error parsing AI response:', parseError);
            analysis = { events: [], overallRisk: 0 };
        }

        // Attach source articles to events
        const eventsWithSources = (analysis.events || []).map((event, idx) => ({
            ...event,
            source: articles[idx]?.source?.name || 'News',
            headline: articles[idx]?.title || '',
            url: articles[idx]?.url || ''
        }));

        return {
            events: eventsWithSources,
            score: analysis.overallRisk || 0,
            confidence: eventsWithSources.length > 0 ? 0.85 : 0
        };

    } catch (error) {
        console.error('Error analyzing news with Groq AI:', error.message);
        return { events: [], score: 0, confidence: 0 };
    }
}

/**
 * Get comprehensive news-based risk analysis for a city
 * @param {string} city - City name
 * @returns {Promise<Object>} News risk analysis
 */
async function getNewsRiskAnalysis(city) {
    try {
        console.log(`\n=== NEWS RISK ANALYSIS FOR ${city} ===`);

        // Fetch news
        const articles = await fetchDisasterNews(city);
        console.log(`✅ Fetched ${articles.length} articles from GNews`);
        if (articles.length > 0) {
            console.log('Sample article:', articles[0]?.title);
        }

        // Analyze with AI
        console.log('🤖 Sending to Groq AI for analysis...');
        const analysis = await analyzeNewsWithAI(articles, city);
        console.log('📊 AI Analysis Result:', JSON.stringify(analysis, null, 2));

        const result = {
            success: true,
            city: city,
            newsRisk: analysis,
            articlesFound: articles.length,
            timestamp: new Date().toISOString()
        };

        console.log('📤 Final API Response:', JSON.stringify(result, null, 2));
        return result;
    } catch (error) {
        console.error('Error in news risk analysis:', error);
        return {
            success: false,
            city: city,
            newsRisk: { events: [], score: 0, confidence: 0 },
            articlesFound: 0,
            error: error.message
        };
    }
}

module.exports = {
    getNewsRiskAnalysis,
    fetchDisasterNews,
    analyzeNewsWithAI
};
