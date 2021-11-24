import React from 'react'
import banner from './Header.css'
import './Header.css'

function Header() {
    return (
        <div className="divOne">
            <div className="divTwo">
                <h1 className="logo">AD BUTTON</h1>
                <h3 className="login">Login</h3>
                <h3 className="logout">Logout</h3>

                <div className="about">
                    <h3>About</h3>
                </div>
                <div className="banner">
                    <img className="img1" src={banner} alt="image not found"/>
                </div>

            </div>

        </div>
    )
}

export default Header
