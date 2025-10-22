# OmniBot - Your AI Companion

An intelligent AI chatbot with a sarcastic Gen Z persona, built with React, TypeScript, and powered by the Google Gemini API.

## Features

-   **Dynamic AI Conversations**: Chat with an AI powered by Google's Gemini model.
-   **Unique Persona**: The AI is constrained by a system prompt to be sarcastic and use a specific list of Gen Z slang.
-   **Modern UI**: Clean, responsive, and aesthetically pleasing user interface.
-   **No Build Step Needed**: Uses an in-browser compiler to handle TypeScript/JSX on the fly, making it easy to deploy to static hosting.

## How to Run Locally

To run this application on your local machine, you'll need a modern web browser and a Google Gemini API key.

### Prerequisites

-   A modern web browser (like Chrome, Firefox, or Edge).
-   A Google Gemini API key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Running the App

1.  Because this project is built as a set of static files with no build process, you need to serve them from a local web server.
2.  The easiest way is to use a simple command-line server. If you have Node.js installed, you can run this command from the project's root directory:
    ```bash
    npx serve
    ```
3.  The terminal will output a local address, usually `http://localhost:3000`.
4.  Open this address in your web browser.

> **Note**: For the AI to work, you will need to handle your API key. See the deployment section for more details on the security risks. For local testing, you can edit the `services/geminiService.ts` file as described in its comments.

## Deploying to GitHub Pages

This application is configured to run directly on static hosting services like GitHub Pages. It uses an in-browser compiler (Babel Standalone) to handle TypeScript and JSX, so no local build step is required.

### 1. Push to GitHub

Create a new repository on GitHub and push the project files to it.

### 2. Configure GitHub Pages

1.  In your new GitHub repository, go to the **Settings** tab.
2.  In the left sidebar, click on **Pages**.
3.  Under the "Build and deployment" section, for the "Source", select **Deploy from a branch**.
4.  Choose your main branch (usually `main` or `master`) and select the `/ (root)` folder. Click **Save**.

GitHub will now build and deploy your site. After a few minutes, a link to your live site will appear in this same section.

### 3. Critical: Handling Your API Key on a Live Site

The biggest challenge with deploying a client-side app that uses an API key is keeping that key secure.

**WARNING: The development method (`process.env.API_KEY`) will NOT work on a live GitHub Pages site.** This method is for server-side environments or specific development tools.

To make the deployed version work, you would need to place your API key directly into the code. **THIS IS A MAJOR SECURITY RISK.** If you push your API key to a public GitHub repository, anyone can find it and use it, which could result in charges to your account.

For a **private, temporary demo only**, you can modify `services/geminiService.ts` as shown in the file's comments. **DO NOT DO THIS on a public repository.** The correct, secure way to handle API keys for a production application is to use a backend server that acts as a proxy, keeping the key hidden from the client-side code.