import MoviesList from "./MoviesList";
import NavBar from "./NavBar";
import { Component } from "react";
import { movies } from "./moviesData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleIncStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].stars >= 5) {
      return;
    }

    movies[mid].stars += 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].stars <= 0) {
      return;
    }

    movies[mid].stars -= 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].favrt = !movies[mid].favrt;
    this.setState({
      movies: movies,
    });
  };

  handleToggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isIncart = !movies[mid].isIncart;

    if(movies[mid].isIncart){
      cartCount +=1;
    }else{
      cartCount -= 1;
    }

    this.setState({
      movies: movies,
      cartCount : cartCount
    });
  };

  render() {
    const { movies, cartCount } = this.state;
    return (
      <div className="App">
        <NavBar cartCount={cartCount} />
        <MoviesList
          movies={movies}
          handleIncStars={this.handleIncStars}
          handleDecStars={this.handleDecStars}
          handleFavourite={this.handleToggleFav}
          handleToggleCart={this.handleToggleCart}
        />
      </div>
    );
  }
}

export default App;
