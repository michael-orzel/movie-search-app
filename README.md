# Movie Search App

A Movie Search Application made with OMDB API. Fetch API for HTTP requests. Made with React, Tailwind CSS, and Vite.

## Features

- **React 19**: JavaScript library for building UIs.
- **Tailwind CSS 3**: Utility-first CSS framework.
- **Vite 6**: Build tool to create the application.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20.x or later recommended)
- [npm](https://www.npmjs.com/) (v10.x or later) or [pnpm](https://pnpm.io/) (v9.x or later)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/michael-orzel/movie-search-app.git
cd movie-search-app

### 2. Install Dependencies
Using npm:
```bash
npm install

Or using pnpm:
```bash
pnpm install

### 3. Run the Development Server
```bash
npm run dev

Open http://localhost:5173 in your browser to view the app.

## Project Structure

movie-search-app/
├── public/                 # Static assets served directly
│   ├── favicon.ico         # Favicon for the app
│   └── index.html          # Main HTML file (Vite entry point)
├── src/                    # Source code directory
│   ├── __tests__/             # Test files
│   │   ├── App.unit.test.jsx/         # App unit testing
│   ├── images/             # Image files
│   ├── index.css       # Main CSS file with Tailwind directives
│   ├── App.jsx             # Root React component
│   ├── main.jsx            # Entry point for React rendering
│   ├── setupTests.js            # Test setup file
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation (you’re reading it!)
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration (for Tailwind)
└── vite.config.js          # Vite configuration
└── jest.config.js          # Jest configuration
└── jest.setup.js          # Jest setup
└── .env.development          # Development env variables
└── .env.production          # Production env variables
└── .env.example          # Reference for env variables

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.

## Tailwind CSS Configuration

Tailwind CSS is pre-configured. The `tailwind.config.js` file includes:
```js
module.exports = {
content: [
  './index.html',
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
          /* 
            Background Color is Blue-Gray. 
            Primary Accent Color is: Red. 
          */

          ''background': '#1F2A44',
          'dark-bg': '#141A2F',
          'light-bg': '#2E3B5E',
          'primary-red': '#E63946',
          'primary-red-hover': '#F25F5C',
      },
    },
  },
  plugins: [],
}

The `index.css` file includes the necessary directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

## Customizing

- **Add Components**: Place reusable components in `src/components/`.
- **Extend Tailwind**: Modify `tailwind.config.js` to add custom themes, colors, or plugins.

## Deployment

To deploy to a hosting service like Vercel, Netlify, or GitHub Pages:
1. Run `npm run build` to generate the production build in the `dist/` folder.
2. Follow your hosting provider’s instructions to deploy the `dist/` directory.

Example for Vercel:
```bash
vercel --prod

## Contributing

No contributing to this project.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- Built by Michael Orzel (https://github.com/michael-orzel)
