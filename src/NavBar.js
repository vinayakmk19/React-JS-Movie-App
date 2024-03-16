import { Component } from "react";

class NavBar extends Component {

    render(){

        const {cartCount} = this.props;

        return(
            <>
                <div className="nav">
                    <div className="nav-title">Movie-App</div>
                    <div className="cartWrapper">
                        <img className="cart-icon" src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="" />
                        <span className="cartCount">{cartCount}</span>
                    </div>
                </div> 
            </>
        )
    }


}

export default NavBar;