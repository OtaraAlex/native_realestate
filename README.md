<div align="center">
  <h3 align="center">A Real Estate App</h3>
  
  <div>
    <img src="https://img.shields.io/badge/-Expo-black?style=for-the-badge&logoColor=white&logo=expo&color=000020" alt="expo" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

This is a full-stack Real Estate application with React Native, featuring Google authentication, dynamic property listings, and user profiles. Designed with modern tools like Expo SDK 52, Appwrite, Tailwind CSS, and TypeScript for a seamless and scalable experience.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Expo
- React Native
- TypeScript
- Nativewind
- Appwrite
- Tailwind CSS

## <a name="features">🔋 Features</a>

![Splash Screen](https://github.com/user-attachments/assets/61974ea0-4836-442f-9807-ed1e65f057e8)

👉 **Authentication with Google**: Secure and seamless user sign-ins using Google’s authentication service.

![Sign In](https://github.com/user-attachments/assets/e45310ee-7bdc-40ea-afa0-4571384b4e4c)

👉 **Home Page**: Displays the latest and recommended properties with powerful search and filter functionality.

![Home](https://github.com/user-attachments/assets/35467962-9787-438a-9045-631ca4a3716f)

👉 **Explore Page**: Allows users to browse all types of properties with a clean and intuitive interface.

![Explore](https://github.com/user-attachments/assets/fec973da-570a-49b9-89cc-fe48b611b310)

👉 **Property Details Page**: Provides comprehensive information about individual properties, including images and key details.

![Property Details](https://github.com/user-attachments/assets/7533bff6-b5e9-4979-a027-90323dcde54d)

👉 **Profile Page**: Customizable user settings and profile management

![Profile](https://github.com/user-attachments/assets/f276bfbc-712d-402e-b6b0-afe7955f91db)

👉 **Centralized Data Fetching**: Custom-built solution inspired by TanStack’s useQuery for efficient API calls.

and many more, including code architecture and reusability

![no-results](https://github.com/user-attachments/assets/673f15be-1ced-4d4c-b848-045756a70f0d)

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/OtaraAlex/native_realestate.git
cd native_realestate
```

**Installation**

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=
```

Replace the values with your actual Appwrite credentials. You can obtain these credentials by signing up & creating a new project on the [Appwrite website](https://apwr.dev/JSM050).

**Start the app**

```bash
 npx expo start
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).
