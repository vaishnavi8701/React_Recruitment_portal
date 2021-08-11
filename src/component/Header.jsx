/* eslint-disable */
import React from "react";
import { NavLink, Redirect } from 'react-router-dom';
import Jumbotron from "./Jumbotron";


class Header extends React.Component{
render(){
   

    return (
        <header className="hero-area">

        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
            <div className="container">
                <div className="theme-header clearfix">
                    <div className="navbar-header">
                    <NavLink exact className='navbar-brand' style={{fontWeight: 'bold',color:'#00008B'}} to='/'>JobsYouPrefer</NavLink>
                       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
                                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                            <span className="lni-menu"/>
                            <span className="lni-menu"/>
                            <span className="lni-menu"/>
                        </button>
                        
                    </div>
                    <div className="collapse navbar-collapse" id="main-navbar">
                        <ul className="navbar-nav mr-auto w-100 justify-content-end">
                            <li className="nav-item">
                                <NavLink exact className='nav-link' activeClassName='' to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className='nav-link' activeClassName='' to='/jobs'>Jobs</NavLink>
                            </li>
                                        <li className="nav-item">
                                            <NavLink exact className='nav-link' activeClassName='' to='/login'>Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact className='nav-link' activeClassName='' to='/register'>Register</NavLink>
                                        </li>
                                 
                          
                          

                            <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                     Contact Us
                                </a>
                           
                             </li>
                         </ul>
                     </div>
                </div>
            </div>
           <div className="mobile-menu" data-logo="assets/img/logo-mobile.png"/>
         </nav>
         {
            ['/'].includes(window.location.pathname) ? (
                <Jumbotron/>
            ) : ''
        }
    </header>
    );
}

}


export default Header;