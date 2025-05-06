Ask Kai Mobile App Deployment Guide (Capacitor)

Overview

This guide details how to deploy the current Ask Kai web app as a native Android and iOS app using Capacitor. This method leverages your existing HTML/CSS/JavaScript structure with no need to rewrite using frameworks like React Native.


---

Prerequisites

Node.js (v18+)

Android Studio (for Android build & emulator)

Xcode + macOS (for iOS build)

GitHub or GitLab for repository



---

1. Set up Project with Capacitor

npm install --global @capacitor/cli
npx create-react-app askkai-app --template blank
cd askkai-app

# Init Capacitor (update name and ID accordingly)
npx cap init "AskKai" com.kaymar.askkai


---

2. Copy Current Web App

Copy all files from your current project (index.html, CSS, scripts, etc.) into askkai-app/public

Replace the default index.html



---

3. Configure capacitor.config.ts

export default {
  appId: 'com.kaymar.askkai',
  appName: 'AskKai',
  webDir: 'public',
  bundledWebRuntime: false
};


---

4. Build and Sync

npx cap sync


---

5. Android Deployment

npx cap add android
npx cap open android

Use Android Studio to run on emulator or physical device.

Use Build > Generate Signed APK to publish.



---

6. iOS Deployment (macOS only)

npx cap add ios
npx cap open ios

Open in Xcode

Run on iOS Simulator or device (Apple Dev Account required)



---

7. Enable Native Features

Optional plugins:

@capacitor/filesystem for file access

@capacitor/storage for local storage

@capacitor/app for app lifecycle events


npm install @capacitor/filesystem @capacitor/storage @capacitor/app
npx cap sync


---

8. Add Splash Screens + Icons

Use Capacitor Assets Generator for cross-platform icons & splash assets.


---

9. Environment Setup

Use .env variables with Vite or roll your own solution. Ensure API keys (like Supabase) are securely embedded or fetched via API proxy.


---

10. Publish to Stores

Android: Google Play Console

iOS: Apple App Store via App Store Connect



---

Notes

Your backend (askkai.js) continues running on Render.

Use Supabase Auth for secure sign-in. Google login supported with Capacitor browser-based OAuth.



---

Next Steps

Add secure login page (with Supabase)

Wrap Stripe payment inside Capacitor

Track prompts/token usage in Supabase

Lock app behind login for soft-launch group only



---

Ready for production testing once login system is finalized.

