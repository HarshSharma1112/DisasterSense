import React from 'react';
import { Newspaper, ExternalLink, AlertCircle, TrendingUp, Calendar } from 'lucide-react';

const DisasterNews = ({ newsData, city }) => {
    if (!newsData) {
        return (
            <div className="glass rounded-2xl p-6 animate-pulse">
                'Hello'
            </div>
        );
    }

    console.log("log from disasterNews", newsData);

    const { newsRisk, articlesFound } = newsData;
    const hasEvents = newsRisk?.events && newsRisk.events.length > 0;

    return (
        <div className="glass rounded-2xl p-6 hover:glow transition-smooth animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                        <Newspaper className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Disaster News Intelligence</h3>
                        <p className="text-gray-400 text-sm">AI-Powered News Analysis for {city}</p>
                    </div>
                </div>
                {hasEvents && (
                    <div className="flex items-center space-x-2 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-1">
                        <AlertCircle className="h-4 w-4 text-red-400" />
                        <span className="text-xs font-bold text-red-400">{newsRisk.events.length} Alert{newsRisk.events.length > 1 ? 's' : ''}</span>
                    </div>
                )}
            </div>

            {/* News Events or No Events Message */}
            {hasEvents ? (
                <div className="space-y-3">
                    {newsRisk.events.map((event, index) => (
                        <a
                            key={index}
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-dark-200/50 hover:bg-dark-200/70 border border-gray-700 hover:border-primary rounded-xl p-4 transition-smooth group"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    {/* Event Type Badge */}
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-bold ${event.severity >= 7
                                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                                : event.severity >= 5
                                                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                            }`}>
                                            {event.type}
                                        </span>
                                        <div className="flex items-center space-x-1">
                                            <TrendingUp className={`h-3 w-3 ${event.severity >= 7 ? 'text-red-400' : event.severity >= 5 ? 'text-orange-400' : 'text-yellow-400'
                                                }`} />
                                            <span className="text-xs text-gray-400">Severity: {event.severity}/10</span>
                                        </div>
                                    </div>

                                    {/* Headline */}
                                    <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                        {event.headline}
                                    </h4>

                                    {/* Reason */}
                                    {event.reason && (
                                        <p className="text-xs text-gray-400 mb-2 line-clamp-2">{event.reason}</p>
                                    )}

                                    {/* Source */}
                                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                                        <Calendar className="h-3 w-3" />
                                        <span>Source: {event.source}</span>
                                    </div>
                                </div>

                                {/* External Link Icon */}
                                <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-primary transition-colors ml-3 flex-shrink-0" />
                            </div>
                        </a>
                    ))}

                    {/* AI Confidence */}
                    <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between text-xs">
                        <div className="flex items-center text-gray-400">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            <span>AI Confidence: {Math.round(newsRisk.confidence * 100)}%</span>
                        </div>
                        <span className="text-gray-500">{articlesFound} articles analyzed</span>
                    </div>
                </div>
            ) : (
                <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
                        <Newspaper className="h-8 w-8 text-green-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">No Disaster Events Detected</h4>
                    <p className="text-gray-400 text-sm">
                        {articlesFound > 0
                            ? `AI analyzed ${articlesFound} recent news articles and found no disaster-related events in ${city}.`
                            : `No recent news articles found for ${city}. The area appears stable.`
                        }
                    </p>
                    <div className="mt-4 inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-green-400">All Clear</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DisasterNews;
