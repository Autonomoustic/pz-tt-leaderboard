import React from "react";
import './header.css';

class Header extends React.Component{
    render() {
        return(
            <div className='Header'>
               <img className='Logo' src="https://s3-eu-west-1.amazonaws.com/assets.dev.payzich.com/Zilch_Nav_Logo%402x.png" />
            </div>
        )

    }
}

export default Header;