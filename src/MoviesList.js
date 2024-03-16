import { Component } from "react";
import MovieCard from "./MovieCard";

class MoviesList extends Component {
  

  render() {
    const {movies, handleIncStars, handleDecStars, handleToggleCart, handleFavourite} = this.props
   
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            handleIncStars={handleIncStars}
            handleDecStars={handleDecStars}
            handleFavourite={handleFavourite}
            handleToggleCart={handleToggleCart}

          />
        ))}
      </>
    );
  }
}

export default MoviesList;
