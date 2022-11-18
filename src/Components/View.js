import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { formatedDate } from '../utils';
import Loader from './Loader';
const ViewMovie = () => {
  const [loading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:4000/movie/getMovie/?id=${id}`).then(
      async (resp) => {
        const { status, message, data } = await resp.json();
        setMovieData(data[0]);
        setIsLoading(false);
      }
    );
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">{movieData?.movie_name}</h1>
          <p className="lead text-muted">
            <strong>Cast:</strong>
            <br />
            {movieData?.movie_cast?.join(', ')}
          </p>
          <p className="lead text-muted">
            <strong>Genre:</strong>
            <br />
            {movieData?.movie_genre}
          </p>
          <p className="lead text-muted">
            <strong>Rating:</strong>
            <br />
            {movieData?.movie_rating}
          </p>
          <p className="lead text-muted">
            <strong>Released date:</strong>
            <br />
            {formatedDate(movieData?.movie_release_date)}
          </p>
        </div>
      </div>
      <p>
        <Link to="/" className="btn btn-primary my-2">
          Back
        </Link>
      </p>
    </section>
  );
};

export default ViewMovie;
