# VeriDesh

VeriDesh is a B2B product authentication platform that helps manufacturers in India fight counterfeiting using AI, NFC, and supply chain tracking.

## Features
- **Real-Time Verification:** Consumers can scan QR codes to instantly verify product authenticity.
- **AI Fraud Detection:** Powered by Gemini AI to detect anomalies like supply chain gaps, high scan rates, and unregistered batches.
- **Supply Chain Tracker:** Visual timeline tracking for products from factory to consumer.
- **Admin Dashboard:** Secure manufacturer portal to manage products, view scans, and investigate fraud alerts.

## Tech Stack
- Frontend: HTML5, CSS3, Vanilla JavaScript
- Database: Firebase Firestore
- AI: Google Gemini API (gemini-1.5-flash)
- Scanner: html5-qrcode

## Setup Instructions
1. Replace `YOUR_GEMINI_KEY_HERE` in `app.js` with your Google Gemini API key.
2. Replace the Firebase config placeholder in `firebase-config.js` with your Firebase project credentials.
3. Serve locally using any local web server (e.g., Live Server, Python HTTP server).

## Pages
- `index.html`: Marketing Landing Page
- `scan.html`: Consumer Scanning Interface
- `admin.html`: Manufacturer Dashboard (Password: veridash2026)
- `supply.html`: Supply Chain Visualizer
