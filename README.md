
# OmniBot - Your Sarcastic AI Companion

An intelligent AI chatbot with a sarcastic Gen Z persona, built with React, TypeScript, and Vite, and powered by the Google Gemini API.

## Features

-   **Dynamic AI Conversations**: Chat with an AI powered by Google's Gemini model.
-   **Unique Persona**: The AI is constrained by a system prompt to be sarcastic, critical, and use a specific list of Gen Z slang.
-   **Modern UI**: Clean and responsive user interface.
-   **Standard Build Process**: Uses Vite for a fast development experience and an optimized production build.

## How to Run Locally

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or newer recommended)
-   A Google Gemini API key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-repo-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up your API Key:**
    Create a file named `.env.local` in the root of the project and add your Gemini API key to it:
    ```
    VITE_GEMINI_API_KEY=your_api_key_here
    ```
    *This file is included in `.gitignore` and will not be committed to your repository.*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the app, typically at `http://localhost:5173`.

## ✅ Solution: Deploy the Built Static Files to GitHub Pages

This is the recommended and most reliable way to deploy a modern web application. It involves building your app into static files first, then deploying those files.

### Option 1: Manually Build & Push (Simple but Manual)

This process mirrors the steps from the image you provided.

**1. Build your app locally:**
This command compiles all your React and TypeScript code into a `dist` folder with plain HTML, CSS, and JavaScript that browsers can understand.

```bash
npm run build
```

**2. Push the `dist` folder to a `gh-pages` branch:**
The `git subtree push` command is a clean way to push just the contents of a sub-folder (`dist`) to a specific branch (`gh-pages`) on your remote repository.

```bash
git add dist -f
git commit -m "Deploy build"
git subtree push --prefix dist origin gh-pages
```
*(Note: You may need to run `git rm -r --cached dist` if you've previously committed the dist folder by accident.)*


**3. In your GitHub repository settings:**
- Go to **Settings** → **Pages**.
- Under "Build and deployment", set the **Source** to **Deploy from a branch**.
- Set the branch to **`gh-pages`** and the folder to **`/(root)`**.
- Click **Save**.

Your site will be deployed in a few minutes.

> **⚠️ Warning:** This manual method requires you to rebuild and re-push every time you update your code. For a more automated process, consider using GitHub Actions (see Option 2 below).

### Option 2: Automate with GitHub Actions (Advanced)

For frequent deployments, you can create a GitHub Actions workflow to automatically build and deploy your app whenever you push to your `main` branch. This is the standard for continuous deployment. You can find many pre-made workflows for Vite projects on the GitHub Actions Marketplace.

### Security Note on API Keys

The method using `.env.local` and `VITE_GEMINI_API_KEY` is secure for development, but it's important to understand that when you build your app, this key gets embedded into the final JavaScript files. **Anyone who visits your live website can find this key.** For a public project, this is a major security risk. The only truly secure method for a production app is to use a backend server to hide the key, but for a personal project or demo, this client-side method is common. Be aware of the risks and monitor your API usage.
