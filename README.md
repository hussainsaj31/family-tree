# Family Tree Application

This is a web application for creating, managing, and sharing family trees. It is built with React, TypeScript, Vite, and Tailwind CSS, and it uses Firebase for the backend.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Firebase Configuration

Before you can run the application, you need to set up your own Firebase project and configure the application to use it.

1.  **Create a Firebase project:** Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  **Enable Authentication:** In your Firebase project, go to the "Authentication" section and enable the "Email/Password" and "Google" sign-in methods.
3.  **Create a Firestore Database:** In your Firebase project, go to the "Firestore Database" section and create a new database.
4.  **Get your Firebase config:** In your Firebase project's settings, find your web app's Firebase configuration object. It will look something like this:
    ```javascript
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };
    ```
5.  **Add your config to the project:** Open the `src/lib/firebase.ts` file in this project and replace the placeholder `firebaseConfig` object with your own.

### Installation and Running

Once you have configured Firebase, you can run the application locally:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal).
