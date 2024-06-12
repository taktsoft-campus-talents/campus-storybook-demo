import styles from "./MovieCard.module.css";
import { Button } from "./Button";
import { clsx } from "clsx";

export function MovieCard({
  onToggleFavorite = () => {},
  onDeleteMovie = () => {},
  isFavorite,
  movie: { title, director, year, teaser, canBeDeleted },
}) {
  return (
    <div
      onClick={onToggleFavorite}
      className={clsx([styles["movie-card"], isFavorite && styles.highlight])}
    >
      <div>
        <h2>{title}</h2>
      </div>
      <div className={styles.content}>
        <div>
          <p>
            <strong>Director:</strong> {director}
          </p>
          <p>
            <strong>Year:</strong> {year}
          </p>
        </div>
        <p>{teaser}</p>
      </div>
      <div>
        <Button
          size="small"
          disabled={canBeDeleted}
          onClick={(event) => {
            event.stopPropagation();
            onDeleteMovie();
          }}
        >
          Delete Movie
        </Button>
      </div>
    </div>
  );
}
