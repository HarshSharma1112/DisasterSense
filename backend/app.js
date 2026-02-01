const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// middleware
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    process.env.FRONTEND_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null
].filter(Boolean); // Remove null/undefined values

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        // Check if the origin is in our allowed list or matches Vercel preview deployments
        if (allowedOrigins.includes(origin) || origin.includes('vercel.app')) {
            callback(null, true);
        } else {
            console.warn(`⚠️  Blocked CORS request from origin: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']

}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// request logging middleware (development)
if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
        next();
    });
}

// routes
const responderRoutes = require('./routes/responderRoutes');
const emergencyRoutes = require('./routes/emergencyRoutes');
const riskRoutes = require('./routes/riskRoutes');
const newsRoutes = require('./routes/newsRoutes');
const aiChatRoutes = require('./routes/aiChatRoutes');

app.use('/api/responders', responderRoutes);
app.use('/api/emergency', emergencyRoutes);
app.use('/api/risk', riskRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/ai', aiChatRoutes);

// health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'DisasterSense API is running',
        timestamp: new Date().toISOString()
    });
});

// root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'DisasterSense Emergency Response API',
        version: '1.0.0',
        endpoints: {
            health: '/api/health',
            responders: '/api/responders?lat=XX&lng=YY',
            emergencyReport: 'POST /api/emergency/report',
            emergencyReports: 'GET /api/emergency/reports',
            riskLog: 'POST /api/risk/log',
            riskLogs: 'GET /api/risk/logs'
        }
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found'
    });
});

// error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

module.exports = app;
