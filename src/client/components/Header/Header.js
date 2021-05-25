import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HeaderItems } from "./HeaderItems";
import './Header.css';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

 class Header extends React.Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

     render() {
         return(
                <header>
                    <nav className="HeaderItems">
                        <Link to="/" className="header-logo-link"><h1 className="header-logo">JustCook</h1></Link>
                        <div className="menu-icon" onClick={this.handleClick}>

                            {/* font awesome example. individual icon import */}
                            <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} />

                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            {HeaderItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link className={item.cName} to={item.url}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </header>
         )
     }
 }

 export default Header