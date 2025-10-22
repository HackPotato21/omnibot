# OmniBot - Your AI Companion

An intelligent AI chatbot with a sarcastic Gen Z persona, built with React, TypeScript, and powered by the Google Gemini API.

## Features

-   **Dynamic AI Conversations**: Chat with an AI powered by Google's Gemini model.
-   **Unique Persona**: The AI is constrained by a system prompt to be sarcastic and use a specific list of Gen Z slang.
-   **Modern UI**: Clean, responsive, and aesthetically pleasing user interface.

## How to Run Locally

To run this application on your local machine, you'll need a modern web browser, Node.js, and a Google Gemini API key.

### Prerequisites

-   A modern web browser (like Chrome, Firefox, or Edge).
-   [Node.js](https://nodejs.org/) and npm installed (which includes `npx`).
-   A Google Gemini API key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Environment Setup

The application expects the API key to be available as an environment variable. For local development, you can create a `.env` file in the project's root directory.

1.  Create a file named `.env` in the root of your project.
2.  Add your API key to this file like so:
    ```
    API_KEY=YOUR_GEMINI_API_KEY
    ```
    Replace `YOUR_GEMINI_API_KEY` with your actual key.

> **Note**: This project setup uses a static server (`npx serve`) which does not natively support `.env` files. For the API key to be accessible in a real-world scenario, you would need to use a bundler like Vite or Create React App. However, when running in environments like AI Studio, the API key is automatically injected.

### Serve the Application

1.  Open your terminal or command prompt in the project's root directory.
2.  Run the following command to start a local server:
    ```bash
    npx serve
    ```
3.  The terminal will output a local address, usually `http://localhost:3000`.
4.  Open this address in your web browser.

The OmniBot application should now be running locally. Make sure you have configured your API key correctly for it to function.
