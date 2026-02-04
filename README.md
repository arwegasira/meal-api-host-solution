# Project Name

Meal Info

## Overview

This web project showcases a list of meals fetched dynamically from TheMealDB API [meal api](https://www.themealdb.com/api/json/v1/)

## Tech Stack

- React JS
- Styled Component for styling
- Axios To Fetch data
- React query
- React Router Dom for Routing
- React Icons

## Architecture

## Folder Structure

.
├── CLAUDE.md
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── \_redirects
│   └── favicon-32x32.png
├── src
│   ├── App.jsx
│   ├── AppContext.jsx
│   ├── Axios
│   │   ├── customFetch.js
│   │   └── subscribe.js
│   ├── Components
│   │   ├── Meal.jsx
│   │   ├── MealList.jsx
│   │   ├── Navigation.jsx
│   │   ├── SearchForm.jsx
│   │   └── ToggleTheme.jsx
│   ├── Pages
│   │   ├── About.jsx
│   │   ├── Error.jsx
│   │   ├── HomeLayout.jsx
│   │   ├── Landing.jsx
│   │   ├── Newsletter.jsx
│   │   ├── SingleMeal.jsx
│   │   └── index.js
│   ├── StyledComponents
│   │   ├── ErrorWrapper.js
│   │   ├── MealCard.jsx
│   │   ├── MealistWrapper.js
│   │   ├── NavWrapper.js
│   │   ├── NewsletterWrapper.js
│   │   ├── SearchFormWrapper.js
│   │   └── SingleMealWrapper.js
│   ├── assets
│   │   ├── notFoundDark.svg
│   │   └── pageNotFound.svg
│   ├── index.css
│   └── main.jsx
└── vite.config.js

## Set up

1. Clone The Repository
   ```bash
   git clone git@github.com:arwegasira/meal-api-host-solution.git
   ```
2. Install Dependencies
   ```bash
   npm install
   ```

## Running the Project

1. Dev server

```bash
npm run dev
```

2. Production Server

```bash
npm build
```

##
