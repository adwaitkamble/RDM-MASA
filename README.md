# MASA Alumni 2024 Mobile App 📱

This is a premium React Native mobile application built on **Expo** for the **MASA (Member & Team Room)** rewards and claim ecosystem. The interface is optimized for a sleek, premium dark-mode aesthetic with styled card layouts, timeline activity logs, and a fully navigable flow across 15 responsive screens.

---

## 🚀 Technical Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo (SDK 56)](https://expo.dev/)
- **Navigation**: [React Navigation (v7)](https://reactnavigation.org/) utilizing a Bottom Tab Navigator nested with Stack Navigators
- **Icons**: [Tabler Icons React Native](https://github.com/tabler/tabler-icons/tree/master/packages/icons-react-native)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for static type verification
- **Styling**: Vanilla React Native `StyleSheet` with curated theme tokens

---

## 📂 Screens Overview

The application features **15 fully navigable screens** structured into Member and Team Room domains:

### 👤 Member Room (Home Tab)
1. **Member Room Home**: Main room feed displaying statistics, sub-team room links, and a quick actions menu.
2. **Invite Code Screen**: Form to copy/share invite codes (`MASA-A24-KJ8`) and send email invites, alongside a list of active joined members.
3. **Reward Member Screen**: Form to nominate a member for XRDM rewards with character citation counters.
4. **Claim XRDM Screen**: Good deed claim submission form with a visual timeline representing the 3-step approval process.
5. **Approval Queue Screen**: Administrator view to approve or reject pending member room claims and reward nominations.
6. **Challenges Screen**: Interactive panel detailing open/claimed challenges, complete with proof link submission.
7. **Voting Screen**: Ongoing/closed polls featuring animated vote-distribution progress tracks.
8. **History Screen**: Scrollable audit timeline filtered by Rewards, Claims, Challenges, and Votes.

### 👥 Team Room (Rooms Tab)
9. **Team Room Home**: Dedicated dashboard for sub-rooms (`Dev Squad – Backend`) displaying localized stats and actions.
10. **Create Team Room**: Setup panel to spawn new sub-team rooms, generate invite codes, and invite members.
11. **Team Admin Approval Queue**: Localized approval board for sub-team claims and rewards.
12. **Team Member - Submit Claim**: Claim submission form scoped specifically to team tasks.
13. **Beneficiary Endorsement Screen**: Dedicated step for beneficiaries to add citations, endorsing or declining claims.
14. **Team History Screen**: Activity audit log scoped to events within the team room.

### ⚙️ User Center (Profile Tab)
15. **Profile & Settings Screen**: Account summary displaying Member ID, Balance (`120 XRDM`), Wallet Address, and toggles/actions for Preferences (Dark Mode, Push Notifications, Clear Cache, and Logout).

---

## 🏃 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have [Node.js (v18+)](https://nodejs.org/) installed.

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd rdm-app
```

### 2. Install Dependencies
Install all package dependencies including React Navigation, Tabler Icons, and Expo modules:
```bash
npm install
```

### 3. Start the Expo Dev Server
Start Metro Bundler with cache clearance to build the project cleanly:
```bash
npx expo start --clear
```

### 4. Running on Devices
In the Metro console output, press the corresponding key to open the application:
- Press **`w`** to open in your web browser.
- Press **`a`** to open in an Android Emulator.
- Press **`i`** to open in an iOS Simulator.
- Scan the QR code using the **Expo Go** app on your physical iOS or Android device.

---

## 🔬 Code Verification
You can run a TypeScript compiler check to verify code soundness and ensure there are no syntax or type errors:
```bash
npx tsc --noEmit
```
