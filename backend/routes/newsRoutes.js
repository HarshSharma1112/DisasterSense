const express = require('express');
const router = express.Router();
const { getNewsRiskAnalysis } = require('../services/newsAnalysisService');

/**
 * GET /api/news/analyze?city=CityName
 * Analyze disaster-related news for a city
 */
router.get('/analyze', async (req, res) => {
    try {
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({
                success: false,
                message: 'City parameter is required'
            });
        }

        // Get news risk analysis
        const analysis = await getNewsRiskAnalysis(city);

        res.json(analysis);
    } catch (error) {
        console.error('Error in news analysis route:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to analyze news',
            error: error.message
        });
    }
});

/**
 * GET /api/news/test?city=CityName
 * Test endpoint with mock disaster data
 */
router.get('/test', async (req, res) => {
    const { city } = req.query || 'Delhi';

    console.log('🧪 TEST ENDPOINT: Returning mock disaster data');

    // Mock disaster events for testing
    const mockResponse = {
        success: true,
        city: city,
        newsRisk: {
            events: [
                {
                    type: "Dense Fog",
                    severity: 6,
                    reason: "Heavy fog causing visibility issues and traffic disruptions",
                    source: "Test News",
                    headline: "Dense fog blankets Delhi, disrupts flights and trains",
                    url: "https://example.com/fog-news"
                },
                {
                    type: "Road Accident",
                    severity: 7,
                    reason: "Multiple vehicle collision due to poor visibility",
                    source: "Test Times",
                    headline: "5 injured in pile-up accident on highway",
                    url: "https://example.com/accident-news"
                }
            ],
            score: 6.5,
            confidence: 0.85
        },
        articlesFound: 5,
        timestamp: new Date().toISOString()
    };

    res.json(mockResponse);
});

module.exports = router;
