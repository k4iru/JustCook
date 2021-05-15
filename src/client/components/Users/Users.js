import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);

    // bind this
  }

  // example api call from server
  handleClick() {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return <button onClick={this.handleClick}>Test</button>;
  }
}

/*
function Users() {
  return (<h2>Users</h2>);
}

*/
export default Users;
