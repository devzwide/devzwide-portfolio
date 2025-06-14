# Bukeka Nxumalo (devzwide) Portfolio

This repository contains a **React + Vite** frontend and a minimal **Node.js server** for Bukeka Nxumalo's portfolio.

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
│   └── server.js
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

A minimal Node.js backend using the [@google/genai](https://www.npmjs.com/package/@google/genai) SDK.

- **server.js**  
  Loads an API key from `.env`, initializes the Google GenAI client, and generates a short explanation of AI using Gemini 2.0 Flash.
  - Loads environment variables with `dotenv`.
  - Uses `@google/genai` to call the Gemini API.
  - Logs the response to the console.

- **.env**  
  Stores the Gemini API key:
  ```
  GEMINI_API_KEY=...
  ```

- **package.json**  
  Lists dependencies: `@google/genai`, `@modelcontextprotocol/sdk`, and `dotenv`.

---

## Web Frontend (`web/`)

A React 19 app bootstrapped with Vite and styled using Tailwind CSS.

- **index.html**  
  The HTML entry point with a root div and script loading `src/main.jsx`.

- **src/main.jsx**  
  Renders the React app using `createRoot` and sets up routing with `RouterProvider`.

- **src/router.jsx**  
  Sets up a React Router v7 browser router with a root layout (`Index.jsx`) and a `Home` page.

- **src/Index.jsx**  
  Root layout component that includes the `Header`, an `Outlet` for nested routes, and the `Footer`.

- **src/pages/Home.jsx**  
  Home page that displays the `SideBar` and `ChatBot` components side by side.

- **src/pages/ChatBot.jsx**  
  Simple chatbot UI with message history and input. (Bot logic can be extended to connect to the backend.)

- **src/components/Header.jsx**  
  Responsive navigation bar using Headless UI and Heroicons, with links to sections, blog, resume, and social profiles.

- **src/components/Footer.jsx**  
  Simple footer with copyright.

- **src/components/SideBar.jsx**  
  Sidebar navigation with section links and user profile.

- **assets/styles/styles.css**  
  Imports Tailwind CSS.

- **vite.config.js**  
  Configures Vite to use the React and Tailwind plugins.

- **eslint.config.js**  
  ESLint configuration for React and hooks, using recommended rules.

- **package.json**  
  Declares dependencies: React, ReactDOM, React Router DOM v7, Vite, ESLint, Tailwind CSS, Material Tailwind, Headless UI, Heroicons, and related plugins.

---

## Getting Started

### Server

1. Install dependencies:
   ```
   cd server
   npm install
   ```
2. Add your Gemini API key to `.env`.
3. Run the server:
   ```
   node server.js
   ```

### Web

1. Install dependencies:
   ```
   cd web
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Notes

- **Routing:**  
  The frontend router is set up with a root layout and a home page. Add more routes to `web/src/router.jsx` and corresponding components as needed.

- **ChatBot:**  
  The chatbot UI is implemented in `web/src/pages/ChatBot.jsx`. Extend its logic to connect with backend endpoints for AI-powered responses.

- **API Integration:**  
  The server currently only logs Gemini API responses. To connect the frontend and backend, implement API endpoints in the server and fetch them from the React app.

- **Styling:**  
  Tailwind CSS is used for styling. Update `web/src/assets/styles/styles.css` and use Tailwind utility classes in your components.

- **Linting:**  
  ESLint is configured for React best practices. Run `npm run lint` in the `web` directory to check code quality.

---

## License

MIT © 2025 Bukeka Nxumalo

---

For more details, see the individual `README.md` files in each directory.