import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FooterItems } from "./FooterItems";
import './Footer.css';

 class Footer extends React.Component {
     render() {
         return(
             <nav className="FooterItems">
                 <ul>
                     {FooterItems.map((item, index) => {
                         return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                     })}
                 </ul>
                 <p> &#169; 2021. All Rights Reserved - This is a fake webpage created for HTTP 5303.</p>
             </nav>
         )
     }
 }

 export default Footer