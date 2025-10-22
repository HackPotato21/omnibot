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
    The API key has been hardcoded in `src/services/geminiService.ts` for this demo. For a real application, you would use a `.env.local` file as described in previous versions of this guide.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the app, typically at `http://localhost:5173`.

## ✅ Deploying to GitHub Pages

This project is configured for deployment to GitHub Pages. Follow these steps carefully.

### 1. Important Configuration for GitHub Pages

For the deployed site to work correctly, the build process needs to know the exact sub-folder it will live in. This is configured in the `vite.config.ts` file.

I have already set it up for your current repository name:
```javascript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/omnibot.github.io/', // This MUST match your repository name!
})
```
If you ever change your repository's name, you **must** update the `base` path in `vite.config.ts` to match it.

### 2. Build and Deploy Manually

This is the recommended and most reliable way to deploy.

**A. Build your app locally:**
This command compiles all your code into a final `dist` folder. **You must run this every time you make changes you want to deploy.**

```bash
npm run build
```

**B. Push the `dist` folder to the `gh-pages` branch:**
This command takes the contents of your newly built `dist` folder and pushes them to the special `gh-pages` branch on GitHub, which is where your live site is served from.

```bash
git add dist -f
git commit -m "Deploy build"
git subtree push --prefix dist origin gh-pages
```

**C. Configure GitHub Repository Settings:**
- Go to your repository on GitHub.
- Click **Settings** → **Pages**.
- Under "Build and deployment", set the **Source** to **Deploy from a branch**.
- Set the branch to **`gh-pages`** and the folder to **`/(root)`**.
- Click **Save**.

Your site will be live at `https://hackpotato21.github.io/omnibot.github.io/` in a few minutes.

### Security Note on API Keys

The Gemini API key is currently hardcoded in the source code. This means **anyone who visits your live website can find and use your key.** This is a major security risk. For a personal demo, this is acceptable, but for a public, long-term project, you should use a backend service to protect your key. Be aware of the risks and monitor your API usage.