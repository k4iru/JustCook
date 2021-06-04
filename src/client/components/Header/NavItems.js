import React from "react";
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';


const NavItems = ({ user }) => {
  if (user !== null) {
    return <LoggedIn />;
  }
  return <NotLoggedIn />;
};

export default NavItems;
