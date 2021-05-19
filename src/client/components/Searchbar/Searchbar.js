import React, { Component } from "react";
import "./searchbar.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    // bind this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    fetch("/api/search").then(data => console.log(data));
    e.preventDefault();
  }

  async search(url = '', data = {}) {
    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return res.json();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search Bar</label>
        <input
          name="search"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Searchbar;
