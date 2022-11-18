import React from 'react';
import { Link } from 'react-router-dom';
import { formatedDate } from '../utils';
const MovieCard = ({
  movie_name,
  movie_genre,
  movie_cast,
  movie_rating,
  movie_release_date,
  id,
}) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            {movie_name}
          </text>
        </svg>

        <div className="card-body">
          <p className="card-text">
            <strong>Cast: </strong>
            {movie_cast.join(', ')}
          </p>
          <p className="card-text">
            <strong>Genre: </strong>
            {movie_genre}
          </p>
          <p className="card-text">
            <strong>Rating: </strong>
            {movie_rating}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link
                to={`/view/?id=${id}`}
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </Link>
            </div>
            <small className="text-muted">
              {formatedDate(movie_release_date)}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
