<div align="center">

# ⚡ DisasterSense

### Real-Time Global Disaster Intelligence & SOS System

**AI-Powered Emergency Response Platform | Live Disaster Monitoring | Intelligent Risk Assessment**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-success?style=for-the-badge)](https://disaster-sense-six.vercel.app/)
[![Backend API](https://img.shields.io/badge/⚙️_API-Live-blue?style=for-the-badge)](https://disastersense-5qjt.onrender.com)

[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## 🎯 The Problem

**Every year, natural disasters claim thousands of lives and cause billions in damages.** The critical gap? **Lack of real-time, AI-analyzed disaster intelligence and immediate emergency response systems.**

Current solutions are fragmented:
- ❌ Weather apps show data, but don't analyze **disaster risk**
- ❌ News is scattered, not **AI-filtered** for disasters
- ❌ Emergency services are hard to locate during crises
- ❌ No **intelligent assistant** to guide citizens during emergencies

**People need a single platform that combines real-time data, AI intelligence, and emergency response.**

---

## 💡 Our Solution: DisasterSense

**DisasterSense is the India first AI-powered disaster intelligence platform** that combines:

1. **🤖 AI News Intelligence** - Groq AI analyzes global news to detect disasters in real-time
2. **🚨 One-Click SOS System** - Instant emergency reporting with geolocation
3. **🏥 Smart Emergency Locator** - Find nearest hospitals, police, fire stations instantly
4. **💬 AI Disaster Assistant** - Context-aware chatbot powered by Groq for emergency guidance
5. **📊 Multi-Factor Risk Assessment** - Weather + AQI + Earthquakes + AI-analyzed news

**Unlike traditional apps, we don't just show data—we provide actionable intelligence.**

---

## 🚀 Key Features & USPs

### 🌟 **USP #1: AI-Powered News Intelligence System**
> **Industry First: Real-time disaster detection from global news using Groq AI**

- **GNews API** fetches disaster-related news for any city
- **Groq AI** analyzes each article for:
  - Disaster type (landslide, fog, accident, flood, etc.)
  - Severity score (0-10)
  - Affected areas
  - Actionable insights
- **Risk Integration**: News-based risk contributes 20% to overall risk score
- **Visual Cards**: Latest disasters displayed with AI analysis

**Why it matters:** Traditional apps rely on sensors. We use AI to detect disasters from news **before** they're officially reported.

---

### 🌟 **USP #2: Intelligent SOS Emergency System**
> **One-click emergency reporting with MongoDB logging and real-time geolocation**

- **Instant SOS**: Red button for immediate emergency reporting
- **Auto-Location**: Captures GPS coordinates automatically
- **Disaster Classification**: 8 disaster types (earthquake, flood, fire, etc.)
- **Backend Integration**: Stores SOS reports in MongoDB for emergency responders
- **Emergency Contacts**: Quick access to Police (100), Ambulance (102), Fire (101)

**Why it matters:** During disasters, every second counts. Our SOS system works even when traditional communication fails.

---

### 🌟 **USP #3: AI Disaster Assistant (Groq-Powered)**
> **Context-aware AI chatbot that provides emergency guidance based on current conditions**

- **Groq AI Integration**: Lightning-fast responses using `llama-3.3-70b-versatile`
- **Context-Aware**: Knows current weather, AQI, risk level, and location
- **Emergency Guidance**: Provides safety tips, evacuation routes, first aid
- **Natural Conversation**: Understands disaster-related queries in plain language

**Why it matters:** Citizens need real-time guidance during emergencies. Our AI assistant acts as a virtual emergency advisor.

---

### 🌟 **USP #4: Multi-Source Risk Assessment**
> **Comprehensive risk calculation from 4 independent data sources**

**Risk Factors:**
1. **Weather Data** (30%) - Temperature, humidity, wind speed, precipitation
2. **Air Quality** (20%) - AQI from OpenWeatherMap
3. **Seismic Activity** (30%) - Recent earthquakes from USGS
4. **AI News Analysis** (20%) - Disaster events from news intelligence

**Output:** 0-10 risk score with visual indicators (Low/Moderate/High/Extreme)

**Why it matters:** Single-source risk is unreliable. We combine multiple sources for accurate assessment.

---

### 🌟 **USP #5: Smart Emergency Services Locator**
> **Find nearest hospitals, police stations, fire departments using OpenStreetMap**

- **Geolocation-Based**: Uses user's current location
- **OpenStreetMap Integration**: Real-time data on emergency services
- **Distance Calculation**: Shows exact distance to each facility
- **One-Click Navigation**: Direct links to Google Maps

**Why it matters:** During disasters, finding help quickly saves lives.

---

## 🎨 Design & UX Philosophy

### **Premium, Non-AI-Generated Design**

Our design stands out from typical hackathon projects:

✨ **Modern Glassmorphism** - Translucent cards with backdrop blur  
🎨 **Curated Color Palette** - Warm amber/orange gradients (not generic blue)  
🌓 **Dark Mode First** - Optimized for low-light emergency scenarios  
⚡ **Micro-Animations** - Smooth transitions and hover effects  
📱 **Responsive Design** - Works flawlessly on mobile, tablet, desktop  
♿ **Accessibility** - High contrast, readable fonts, keyboard navigation  

**Design Highlights:**
- Custom weather icons with gradient fills
- Animated risk score gauge
- Smooth page transitions
- Interactive emergency contact cards
- Real-time data loading states

---

## 🛠️ Tech Stack

### **Frontend**
- **React 19** - Latest version with concurrent features
- **Axios** - HTTP client for API calls
- **Recharts** - Data visualization for temperature trends
- **Lucide React** - Modern icon library
- **CSS3** - Custom styling with glassmorphism

### **Backend**
- **Node.js + Express** - RESTful API server
- **MongoDB Atlas** - Cloud database for SOS reports and risk logs
- **Mongoose** - ODM for MongoDB

### **AI & Intelligence**
- **Groq AI** - Ultra-fast LLM inference (`llama-3.3-70b-versatile`)
- **GNews API** - Real-time global news aggregation

### **Data Sources**
- **OpenWeatherMap API** - Weather data, AQI, 5-day forecast
- **USGS Earthquake API** - Real-time seismic activity
- **OpenStreetMap Overpass API** - Emergency services location data

### **Deployment**
- **Vercel** - Frontend hosting with CDN
- **Render** - Backend hosting (free tier)
- **MongoDB Atlas** - Database hosting (free tier)

---

## 📊 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        User Interface                        │
│                    (React + Vercel CDN)                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Express.js Backend                        │
│                    (Render Hosting)                          │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ News Service │  │  AI Service  │  │  SOS Service │      │
│  │  (GNews +    │  │   (Groq AI)  │  │  (MongoDB)   │      │
│  │   Groq AI)   │  │              │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ OpenWeather │  │  USGS API   │  │  MongoDB    │
│     API     │  │ (Earthquakes)│  │   Atlas     │
└─────────────┘  └─────────────┘  └─────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- MongoDB Atlas account (free tier)
- API Keys:
  - [OpenWeatherMap](https://openweathermap.org/api) (free)
  - [GNews](https://gnews.io/) (free tier: 100 requests/day)
  - [Groq](https://console.groq.com/) (free tier)

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/HarshSharma1112/DisasterSense.git
cd DisasterSense
```

#### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Edit .env with your credentials:
# MONGODB_URI=your_mongodb_connection_string
# GNEWS_API_KEY=your_gnews_key
# GROQ_API_KEY=your_groq_key
# FRONTEND_URL=http://localhost:3000

# Start backend
npm start
# Backend runs on http://localhost:5000
```

#### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Create .env file
cp .env.example .env

# Edit .env:
# REACT_APP_API_URL=http://localhost:5000

# Start frontend
npm start
# Frontend runs on http://localhost:3000
```

#### 4. Access the Application
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Live Deployment

### **Production URLs**

🌍 **Frontend:** [https://disaster-sense.vercel.app](https://disaster-sense-six.vercel.app)  
⚙️ **Backend API:** [https://disastersense-5qjt.onrender.com](https://disastersense-backend.onrender.com)  
📊 **API Health:** [https://disastersense-5qjt.onrender.com/api/health](https://disastersense-backend.onrender.com/api/health)

> **Note:** Backend is hosted on Render's free tier. First request may take 30-60 seconds to wake up the server.
---

## 📸 Screenshots & Demo

### Dashboard - Real-Time Intelligence
<img width="1899" height="911" alt="Screenshot 2026-02-01 144930" src="https://github.com/user-attachments/assets/ec63e5d9-08e3-4da1-86c9-0cf513fa9ad9" />


*Multi-source risk assessment with weather, AQI, earthquakes, and AI news analysis*

---

### AI News Intelligence
<img width="1535" height="533" alt="Screenshot 2026-02-01 145018" src="https://github.com/user-attachments/assets/e8175218-d5cf-4822-bea4-5261fd488dbd" />

*Groq AI analyzes global news to detect disasters with severity scores*

---

### SOS Emergency System
<img width="1903" height="917" alt="Screenshot 2026-02-01 144131" src="https://github.com/user-attachments/assets/aed11936-959a-4992-b697-79df550452b9" />


*One-click emergency reporting with geolocation and disaster classification*

---

### AI Disaster Assistant
<img width="1906" height="910" alt="Screenshot 2026-02-01 144233" src="https://github.com/user-attachments/assets/d1fd1501-a78a-44be-8885-a4bb9bcc8e37" />


*Context-aware AI assistant powered by Groq for emergency guidance*

---

## 🎥 Video Demo

[![Watch Demo] https://youtu.be/mBl87tTG-iw?si=BzDiSa0Ua9XqMTUh

---

## 🏆 What Makes DisasterSense Unique?

| Feature | Traditional Apps | DisasterSense |
|---------|-----------------|---------------|
| **Data Sources** | Single source (weather only) | 4 sources (weather, AQI, earthquakes, news) |
| **AI Intelligence** | None | Groq AI analyzes news + provides guidance |
| **Emergency Response** | Phone numbers only | SOS system + emergency locator + AI assistant |
| **Risk Assessment** | Basic weather alerts | Multi-factor AI-powered risk score |
| **News Integration** | Generic news feeds | AI-filtered disaster-specific intelligence |
| **Design** | Generic templates | Premium glassmorphism UI |

---

## 🔮 Future Enhancements

- [ ] **Real-Time Alerts** - Push notifications for high-risk events
- [ ] **Community Reports** - Crowdsourced disaster reporting
- [ ] **Evacuation Routes** - AI-optimized escape paths
- [ ] **Offline Mode** - PWA with cached data for network outages
- [ ] **Multi-Language Support** - Localization for global reach
- [ ] **Predictive Analytics** - ML models to forecast disasters
- [ ] **Government Integration** - Direct connection to emergency services

---

## 📂 Project Structure

```
DisasterSense/
├── frontend/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Dashboard.jsx          # Main dashboard
│   │   │   ├── AIAssistant.jsx        # Groq AI chatbot
│   │   │   ├── SOSModal.jsx           # Emergency SOS
│   │   │   ├── NearestHelp.jsx        # Emergency locator
│   │   │   ├── DisasterNews.jsx       # AI news intelligence
│   │   │   ├── WeatherCard.jsx        # Weather display
│   │   │   └── RiskScore.jsx          # Risk assessment
│   │   ├── App.js
│   │   └── index.css        # Global styles
│   ├── .env.example
│   └── package.json
│
├── backend/                  # Node.js + Express backend
│   ├── models/              # MongoDB schemas
│   │   ├── Emergency.js     # SOS reports
│   │   └── RiskLog.js       # Risk history
│   ├── routes/              # API routes
│   │   ├── emergency.js     # SOS endpoints
│   │   ├── news.js          # News intelligence
│   │   ├── ai.js            # AI chatbot
│   │   └── responders.js    # Emergency services
│   ├── services/
│   │   └── newsAnalysisService.js  # Groq AI integration
│   ├── app.js               # Express app
│   ├── server.js            # Server entry point
│   ├── .env.example
│   └── package.json
│
├── DEPLOYMENT_GUIDE_DETAILED.md
├── README.md
└── LICENSE
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team Syntax Raiders

**Harsh Sharma** - Full Stack Developer & AI Integration  
GitHub: [@HarshSharma1112](https://github.com/HarshSharma1112)

---

## 🙏 Acknowledgments

- **Groq** - For providing ultra-fast AI inference
- **GNews** - For real-time global news API
- **OpenWeatherMap** - For comprehensive weather data
- **USGS** - For earthquake monitoring data
- **OpenStreetMap** - For emergency services location data

---

## 📞 Contact

**Project Link:** [https://github.com/HarshSharma1112/DisasterSense](https://github.com/HarshSharma1112/DisasterSense)  
**Live Demo:** [https://disaster-sense.vercel.app](https://disaster-sense.vercel.app)  
**Email:** harsh_s1@me.iitr.ac.in

---

<div align="center">

### ⚡ Built with passion to save lives ⚡

**If you find this project helpful, please give it a ⭐!**

[![GitHub stars](https://img.shields.io/github/stars/HarshSharma1112/DisasterSense?style=social)](https://github.com/HarshSharma1112/DisasterSense/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/HarshSharma1112/DisasterSense?style=social)](https://github.com/HarshSharma1112/DisasterSense/network/members)

</div>
