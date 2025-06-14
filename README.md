# Bukeka Nxumalo (devzwide) Portfolio

This repository contains a **React + Vite** frontend and a minimal **Node.js Express server** for Bukeka Nxumalo's portfolio, featuring a Gemini-powered chatbot.

---

## Project Structure

```
devzwide-portfolio/
├── README.md
├── LICENSE
├── .gitignore
├── server/
│   ├── package.json
│   ├── .env
│   ├── .gitignore
│   ├── server.js
│   ├── router.js
│   ├── controller/
│   │   └── gemini.controller.js
│   └── data/
│       ├── bukeka.json
│       └── chatlog.json
└── web/
    ├── package.json
    ├── vite.config.js
    ├── eslint.config.js
    ├── index.html
    ├── .gitignore
    └── src/
        ├── main.jsx
        ├── router.jsx
        ├── Index.jsx
        ├── pages/
        │   ├── Home.jsx
        │   └── ChatBot.jsx
        └── components/
            ├── Header.jsx
            ├── Footer.jsx
            └── SideBar.jsx
        └── assets/
            └── styles/
                └── styles.css
```

---

## Server (`server/`)

A Node.js Express backend that powers the chatbot using the [@google/genai](https://www.npmjs.com/package/@google/genai) SDK.

- **server.js**  
  Main entry point. Loads environment variables, sets up CORS and JSON parsing, and mounts the router.

- **router.js**  
  Defines API endpoints:
  - `POST /chat` — Handles chat requests, responds with Gemini-generated answers as Bukeka.
  - `POST /chatlog` — Logs chat messages to `data/chatlog.json`.

- **controller/gemini.controller.js**  
  - `chatWithGemini`: Reads the user profile from `data/bukeka.json`, crafts a prompt, and queries Gemini 2.0 Flash.
  - `saveChat`: Appends chat messages to `data/chatlog.json`.

- **data/bukeka.json**  
  Contains Bukeka's profile, skills, and projects. Used to personalize Gemini responses.

- **data/chatlog.json**  
  Stores chat history between users and the bot.

- **.env**  
  Stores environment variables:
  ```
  SERVER_PORT=8000
  GEMINI_API_KEY=...
  ```

- **package.json**  
  Key dependencies: `express`, `@google/genai`, `dotenv`, `cors`, `nodemon`.

---

## Web Frontend (`web/`)

A React 19 app bootstrapped with Vite and styled using Tailwind CSS.

- **index.html**  
  HTML entry point, loads the React app.

- **src/main.jsx**  
  Renders the app and sets up routing.

- **src/router.jsx**  
  Configures React Router v7 with a root layout (`Index.jsx`) and a `Home` page.

- **src/Index.jsx**  
  Root layout with `Header`, an `Outlet` for nested routes, and (optionally) `Footer`.

- **src/pages/Home.jsx**  
  Home page displaying the `SideBar` and `ChatBot` components side by side.

- **src/pages/ChatBot.jsx**  
  Chatbot UI:
    - Sends user messages to `/chat` endpoint.
    - Logs all messages to `/chatlog`.
    - Displays Gemini-powered responses as Bukeka.
    - Shows loading state and error handling.

- **src/components/Header.jsx**  
  Responsive navigation bar using Headless UI and Heroicons, with links to sections, blog, resume, and social profiles.

- **src/components/Footer.jsx**  
  Simple footer.

- **src/components/SideBar.jsx**  
  Sidebar navigation with section links and user profile.

- **assets/styles/styles.css**  
  Imports Tailwind CSS.

- **vite.config.js**  
  Configures Vite with React and Tailwind plugins.

- **eslint.config.js**  
  ESLint configuration for React and hooks.

- **package.json**  
  Key dependencies: React 19, React Router DOM v7, Tailwind CSS 4, Material Tailwind, Headless UI, Heroicons, React Markdown, etc.

---

## Getting Started

### Server

1. Install dependencies:
   ```sh
   cd server
   npm install
   ```
2. Add your Gemini API key and port to `.env`.
3. Start the server:
   ```sh
   npm run dev
   ```
   The server runs on [http://localhost:8000](http://localhost:8000).

### Web

1. Install dependencies:
   ```sh
   cd web
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Features

- **Chatbot:**  
  - Powered by Gemini 2.0 Flash, responds as Bukeka using profile data.
  - All messages are logged to the backend.
  - Extendable for more advanced AI or analytics.

- **Profile & Projects:**  
  - Profile and project data are stored in `server/data/bukeka.json`.
  - Easily updateable for new skills or projects.

- **Modern Stack:**  
  - React 19, Vite, Tailwind CSS 4, Material Tailwind, Headless UI, Heroicons.
  - ESLint for code quality.

- **API Integration:**  
  - `/chat` endpoint for AI responses.
  - `/chatlog` endpoint for logging.

---

## Notes

- **Routing:**  
  Add more routes in [`web/src/router.jsx`](web/src/router.jsx) and corresponding components as needed.

- **ChatBot:**  
  Extend logic in [`web/src/pages/ChatBot.jsx`](web/src/pages/ChatBot.jsx) for richer conversation or analytics.

- **API Integration:**  
  The backend is ready for more endpoints (e.g., for projects, profile, etc.).

- **Styling:**  
  Use Tailwind utility classes and update [`web/src/assets/styles/styles.css`](web/src/assets/styles/styles.css) as needed.

- **Linting:**  
  Run `npm run lint` in the `web` directory to check code quality.

---

## License

MIT © 2025 Bukeka Nxumalo

---

For more details, see the individual `README.md` files in each directory.