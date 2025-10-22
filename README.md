# OmniBot - Your Sarcastic AI Companion

An intelligent AI chatbot with a sarcastic Gen Z persona, built with React, TypeScript, and Vite, and powered by the Google Gemini API.

## Features

-   **Dynamic AI Conversations**: Chat with an AI powered by Google's Gemini model.
-   **Unique Persona**: The AI is constrained by a system prompt to be sarcastic, critical, and use a specific list of Gen Z slang.
-   **Modern UI**: Clean and responsive user interface.
-   **Standard Build Process**: Uses Vite for a fast development experience and an optimized production build.
-   **Automated Deployment**: Deploys automatically to GitHub Pages using GitHub Actions.

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
    The API key has been hardcoded in `src/services/geminiService.ts` for this demo. For a real application, you would use environment variables.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the app, typically at `http://localhost:5173`.

## Deploying to GitHub Pages

Here are two options for deploying your application to GitHub Pages. The automated method is highly recommended.

### ✅ Option 1: Manually Build & Push (Simple but Manual)

This method requires you to manually build and push your site every time you make changes.

1.  **Build your app locally:**
    ```bash
    npm run build
    ```
    This creates a `dist/` folder (since this project uses Vite).

2.  **Push the `dist/` folder to a `gh-pages` branch:**
    The following commands will push the contents of the `dist` folder to a separate `gh-pages` branch in your repository.
    ```bash
    git add dist -f
    git commit -m "Deploy build"
    git subtree push --prefix dist origin gh-pages
    ```
    Alternatively, you can copy the contents of `dist/` into a new `gh-pages` branch and push that.

3.  **In your GitHub repo → Settings → Pages:**
    *   Set **Source** to **Deploy from a branch**.
    *   Under **Branch**, select `gh-pages` and `/ (root)` folder, then click **Save**.

> ⚠️ **Note:** This method requires rebuilding and re-pushing every time you update code.

### ✅ Option 2: Automated Deployment (Recommended)

This project is configured to deploy automatically to GitHub Pages whenever you push code to your `main` or `master` branch. This is the recommended approach as it's more efficient and less error-prone.

#### One-Time Setup

You only need to do this once.

1.  **Go to your repository on GitHub.**
2.  Click **Settings** → **Pages**.
3.  Under "Build and deployment", set the **Source** to **GitHub Actions**.

That's it! Now, every time you `git push` your changes, the workflow will automatically build your app and deploy it. Your site will be live at `https://hackpotato21.github.io/omnibot.github.io/` a few minutes after the action completes.

#### How it Works

The `.github/workflows/deploy.yml` file contains a script that tells GitHub to:
1.  Install all dependencies.
2.  Run `npm run build` to create the optimized `dist` folder.
3.  Deploy the contents of that `dist` folder to your GitHub Pages site.

This eliminates all manual deployment steps.

## Security Note on API Keys

The Gemini API key is currently hardcoded in the source code. This means **anyone who visits your live website can find and use your key.** This is a major security risk. For a personal demo, this is acceptable, but for a public, long-term project, you should use a backend service to protect your key. Be aware of the risks and monitor your API usage.