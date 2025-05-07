Ask Kai Mobile App Deployment Guide (Capacitor)

---

## Overview
This guide details how to deploy the current Ask Kai web app as a native Android and iOS app using **Capacitor**. This method leverages your existing HTML/CSS/JavaScript structure with no need to rewrite using frameworks like React Native.

---

## Prerequisites
- Node.js (v18+)
- Android Studio (for Android build & emulator)
- Xcode + macOS (for iOS build)
- GitHub or GitLab for repository version control

---

## 1. Set up Project with Capacitor
```bash
npm install --global @capacitor/cli
npx create-react-app askkai-app --template blank
cd askkai-app

# Init Capacitor (update name and ID accordingly)
npx cap init "AskKai" com.kaymar.askkai
```

---

## 2. Copy Current Web App
- Copy all files from your current project (`index.html`, CSS, JS, assets) into `askkai-app/public`
- Replace the default `index.html`

---

## 3. Configure `capacitor.config.ts`
```ts
export default {
  appId: 'com.kaymar.askkai',
  appName: 'AskKai',
  webDir: 'public',
  bundledWebRuntime: false
};
```

---

## 4. Build and Sync
```bash
npx cap sync
```

---

## 5. Android Deployment
```bash
npx cap add android
npx cap open android
```
- Use Android Studio to run on emulator or physical device
- Use **Build > Generate Signed APK** to publish

---

## 6. iOS Deployment (macOS only)
```bash
npx cap add ios
npx cap open ios
```
- Open in Xcode
- Run on iOS Simulator or device (Apple Developer Account required)

---

## 7. Enable Native Features (Optional)
```bash
npm install @capacitor/filesystem @capacitor/storage @capacitor/app
npx cap sync
```

- `@capacitor/filesystem` for file access
- `@capacitor/storage` for local storage
- `@capacitor/app` for app lifecycle events

---

## 8. Add Splash Screens + Icons
- Use **Capacitor Assets Generator** (e.g., https://capacitorjs.com/docs/guides/splash-screens) for cross-platform icon and splash generation

---

## 9. Environment Setup
- Use `.env` files if using Vite or roll your own config
- Ensure secrets like **Supabase keys** are stored securely or accessed through backend proxy

---

## 10. Publish to Stores
- **Android**: Upload to Google Play Console
- **iOS**: Use App Store Connect via Xcode

---

## Notes
- Your backend (`askkai.js`) continues running on **Render**
- **Supabase Auth** handles secure sign-in
- Google login supported with Capacitor using browser-based OAuth

---

## Next Steps
- [ ] Finalize secure login screen (Supabase Auth + Google OAuth)
- [ ] Add Facebook/Outlook login support (OAuth)
- [ ] Wrap Stripe payment pages inside Capacitor WebView
- [ ] Track prompt/token usage via Supabase DB
- [ ] Lock app behind login for soft-launch testers only
- [ ] Add deep linking + push notification support

---

App ready for **production testing** once the login/auth system is finalized and integrated with Supabase.

---


All set. The appdeploy.md file is now updated with a complete Capacitor deployment guide, including next steps and production checklists.

a. Want me to help scaffold the askkai-app Capacitor folder structure now?
b. Or set up Supabase token sync and Stripe in the Capacitor environment next?

