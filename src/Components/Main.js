import React from 'react';
import MovieContainer from './MovieContainer';
const Main = () => {
  return (
    <main>
      <section className="text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Album example</h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
          </div>
        </div>
      </section>

      <div className="album bg-light">
        <MovieContainer />
      </div>
    </main>
  );
};

export default Main;
