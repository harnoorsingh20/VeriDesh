# VeriDesh

VeriDesh is a B2B product authentication platform that helps manufacturers in India fight counterfeiting using AI, NFC, and supply chain tracking.

## Features
- **Manufacturer Dashboard:** Register products, view analytics, and monitor fraud alerts in real-time.
- **Consumer Scanner:** A fast, web-based QR/NFC scanner that verifies product authenticity instantly.
- **Supply Chain Tracker:** Visualizes the journey of a product from factory to consumer, flagging gaps (e.g. missing distributor scans).
- **Gemini AI Integration:** Google's Gemini AI analyzes scan patterns and supply chain data to detect anomalies and counterfeits.

## Tech Stack
- Frontend: HTML5, CSS3, Vanilla JavaScript
- Database: Firebase Firestore
- AI: Google Gemini API (gemini-1.5-flash)
- Scanner: html5-qrcode

## Setup Instructions
1. Run `firebase login` and `firebase init hosting`.
2. Select the `public` directory.
3. Add your Firebase keys and Gemini API key to `public/firebase-config.js` and `public/app.js` respectively. (Note: A local mock database will seamlessly take over if valid keys are not provided, ensuring the demo works flawlessly out of the box).
4. Run `firebase deploy` to host the platform globally.
