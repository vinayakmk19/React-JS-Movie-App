import { Component } from "react";

class MovieCard extends Component {

    

  

    handleFavourite = () => {
      this.setState({
        favrt : !this.state.favrt
      })
    }
    
    handleAddtoCart = () => {
      this.setState({
        isIncart : !this.state.isIncart
      })
    }

  render() {
    // console.log(this.props.movies);
    const {movies, handleIncStars, handleDecStars, handleFavourite, handleToggleCart} = this.props
    const {title, plot, price, rating, stars, favrt, isIncart, poster} = this.props.movies
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src={poster} alt="poster" />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price"> Rs. {price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img onClick={()=>{handleDecStars(movies)}} src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" alt="decrease" className="str-btn" />
                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars" className="stars" />
                <img onClick={()=>{handleIncStars(movies)}} src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png" alt="increase" className="str-btn" />
                <span className="starCount">{stars}</span>
              </div>
              {favrt ? <button className="favourite-btn" onClick={()=>{handleFavourite(movies)}}>Favorite</button>: <button className="unfavourite-btn" onClick={()=>{handleFavourite(movies)}}>Un-favorite</button>}
              
              <button className={isIncart ? "unfavourite-btn":"cart-btn"} onClick={()=>{handleToggleCart(movies)}}>{isIncart ? "Remove":"Add to Cart"}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
