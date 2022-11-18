import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import MovieCard from './MovieCard';

const MovieContainer = () => {
  const [loading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:4000/movie/getMovie').then(async (resp) => {
      const { status, message, data } = await resp.json();
      setMovieData(data);
      setIsLoading(false);
    });
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {console.log({ movieData })}
        {movieData?.map((movie) => (
          <MovieCard
            key={movie?.id}
            id={movie?.id}
            movie_name={movie?.movie_name}
            movie_genre={movie?.movie_genre}
            movie_cast={movie?.movie_cast}
            movie_rating={movie?.movie_rating}
            movie_release_date={movie?.movie_release_date}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
