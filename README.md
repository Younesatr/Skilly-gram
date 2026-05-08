# Skilligram

Show proof, own the vibe. The creative social layer for the next generation of builders and visionaries.

## Prerequisites

Before building and running the application locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Getting Started

1. **Download the code**: Use the "Export" button in AI Studio to download the ZIP file and extract it to a folder on your computer.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment Setup**:
   - Create a `.env` file in the root directory.
   - Copy the contents from `.env.example` into `.env`.
   - Add your [Gemini API Key](https://aistudio.google.com/app/apikey) to the `GEMINI_API_KEY` variable.
   - If you are using your own Firebase project, update `firebase-applet-config.json` with your project's configuration.

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Building for Production

To create a production-ready build:
```bash
npm run build
```
The static files will be generated in the `dist/` directory.

## Publishing to GitHub

1. Create a new repository on [GitHub](https://github.com/new).
2. Open your terminal in the project folder.
3. Initialize Git and push the code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## Deployment

You can deploy the `dist/` folder to platforms like:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/) (requires some configuration for SPAs)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
