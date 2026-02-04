# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Meal Info - A React application for searching and viewing meal recipes from TheMealDB API.

## Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # Production build
npm run lint     # Run ESLint (zero warnings allowed)
npm run preview  # Preview production build
```

## Folder Structure

```
.
├── index.html
├── package.json
├── vite.config.js
├── public
│   ├── _redirects
│   └── favicon-32x32.png
└── src
    ├── App.jsx
    ├── AppContext.jsx
    ├── main.jsx
    ├── index.css
    ├── Axios
    │   ├── customFetch.js
    │   └── subscribe.js
    ├── Components
    │   ├── Meal.jsx
    │   ├── MealList.jsx
    │   ├── Navigation.jsx
    │   ├── SearchForm.jsx
    │   └── ToggleTheme.jsx
    ├── Pages
    │   ├── About.jsx
    │   ├── Error.jsx
    │   ├── HomeLayout.jsx
    │   ├── Landing.jsx
    │   ├── Newsletter.jsx
    │   ├── SingleMeal.jsx
    │   └── index.js
    ├── StyledComponents
    │   ├── ErrorWrapper.js
    │   ├── MealCard.jsx
    │   ├── MealistWrapper.js
    │   ├── NavWrapper.js
    │   ├── NewsletterWrapper.js
    │   ├── SearchFormWrapper.js
    │   └── SingleMealWrapper.js
    └── assets
        ├── notFoundDark.svg
        └── pageNotFound.svg
```

## Architecture

### Tech Stack
- React 18 with Vite
- React Router v6 (with loader/action patterns)
- React Query (@tanstack/react-query) for data fetching and caching
- Styled Components for component-scoped styling
- Axios for HTTP requests

### Key Patterns

**React Router Loaders/Actions**: Pages use React Router's data loading pattern. Loaders prefetch data before route transitions, actions handle form submissions.
- Loaders receive `queryClient` and use `ensureQueryData` for cache-aware fetching
- Actions process FormData and return results with toast notifications

**Global State via Context**: `AppContext.jsx` provides theme state (dark/light mode) with localStorage persistence. Access via `useGlobalContext()` hook.

**React Query Caching**: Configured in `App.jsx` with 2-minute staleTime. Query options are defined per-page (e.g., `queryOptions` in Landing.jsx).

### External APIs

- **TheMealDB**: `https://www.themealdb.com/api/json/v1/1` - Meal search and lookup (configured in `src/Axios/customFetch.js`)
- **Newsletter Backend**: `https://registersubscriber.onrender.com/api/v1` - Subscriber registration (configured in `src/Axios/subscribe.js`)

### Route Structure

```
/              → Landing (search + meal grid)
/meal/:id      → SingleMeal (detailed recipe view)
/newsletter    → Newsletter subscription form
/about         → Contact page
*              → Error 404
```

### Styling

Global CSS variables for theming are in `index.css`. Dark mode toggles `.dark-theme` class on document body. Styled Components in `src/StyledComponents/` provide component-specific styles.

## Development Rules

- **When adding a new page**: Always add a corresponding link in both the routes (`App.jsx`) and navigation (`src/Components/Navigation.jsx`).
