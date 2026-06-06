# 🎬 React Movie Search App

A full-stack movie search application built with **Next.js** and **Tailwind CSS**, powered by the **TMDb API**. Search any movie and instantly see its poster, release date, rating, popularity score, and overview.

**[Live Demo](https://react-movie-search-app-five.vercel.app)**

---

## Features

- Search any movie by title in real time
- Displays movie poster, release date, rating, popularity, and overview
- Filters out results without poster images for a clean UI
- Fully responsive layout styled with Tailwind CSS
- Deployed with automatic CI/CD via Vercel

---

## Tech Stack

| Technology   | Purpose                         |
| ------------ | ------------------------------- |
| Next.js 14   | React framework with App Router |
| React        | Component-based UI              |
| Tailwind CSS | Utility-first styling           |
| TMDb API     | Movie data source               |
| Vercel       | Hosting and CI/CD               |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A free [TMDb API key](https://www.themoviedb.org/settings/api)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Steve-Munoz/React-Movie-Search-App.git
cd React-Movie-Search-App
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
└── app/
    ├── searchMovies.js   # Search form, API calls, and state management
    ├── movieCard.js      # Reusable movie card component
    ├── page.js           # Homepage
    ├── layout.js         # Global layout wrapper
    └── globals.css       # Global styles
```

---

## How It Works

1. The user types a movie title into the search form and submits
2. `searchMovies.js` fires an async `fetch` request to the TMDb search endpoint with the query as a URL parameter
3. The API returns a JSON object containing a `results` array of movie objects
4. Results are filtered to only include movies with a `poster_path`
5. State is updated via React's `useState` hook, triggering a re-render
6. Each movie is passed as a prop to the `MovieCard` component, which renders the poster via Next.js's optimized `<Image>` component along with the movie details

---

## Environment Variables

| Variable                   | Description       |
| -------------------------- | ----------------- |
| `NEXT_PUBLIC_TMDB_API_KEY` | Your TMDb API key |

> **Note:** Never commit your `.env.local` file. It is excluded by `.gitignore` by default.

---

## Deployment

This app is deployed on [Vercel](https://vercel.com). Every push to the `main` branch triggers an automatic redeployment. The TMDb API key is stored securely as an environment variable in the Vercel dashboard.

---

## Acknowledgements

- Movie data provided by [The Movie Database (TMDb)](https://www.themoviedb.org/)
- Built with [Next.js](https://nextjs.org/) and deployed on [Vercel](https://vercel.com)
