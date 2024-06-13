import styles from "./App.module.css";
import { Button } from "./components/Button";
import { MovieCard } from "./components/MovieCard";
import { movies as initialMovies } from "./data/movies";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(() =>
    initialMovies.map((movie) => ({ ...movie, isFavorite: false }))
  );
  function handleToggleFavorite(id) {
    setMovies((movies) =>
      movies.map((movie) =>
        movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
      )
    );
  }
  function handleDeleteMovie(id) {
    setMovies((movies) => movies.filter((movie) => movie.id !== id));
  }
  return (
    <>
      <h1>Storybook Demo</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi delectus
        qui maxime quisquam tempora, distinctio dolores nisi iusto nihil,
        laboriosam, aut quidem. Provident ex obcaecati rem est? Eveniet, nostrum
        exercitationem!
      </p>

      <ul className={styles["movie-list"]}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard
              isFavorite={movie.isFavorite}
              onToggleFavorite={() => handleToggleFavorite(movie.id)}
              onDeleteMovie={() => handleDeleteMovie(movie.id)}
              movie={movie}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
