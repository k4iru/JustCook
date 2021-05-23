import React, { Component } from "react";
import "./searchbar.css";

import { connect } from "react-redux";
import {
  UpdateQuery,
  UpdateResults,
} from "../../redux/Search/search-actions";

class Searchbar extends Component {
  constructor(props) {
    super(props);
     this.state = { 
      value: "",
  results: [], };

    // bind this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  // split post body for queries, options, etc
 handleSubmit(e) {
    let res = this.search('/api/search', {'query': this.state.value, 'options': 'another test'});
    res.then(data => {
      console.log(data.results);
    });
    e.preventDefault();
  }

  async search(url = "", data = {}) {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateQuery: (query) => dispatch(UpdateQuery(query)),
    UpdateResults: (results) => dispatch(UpdateResults(results)),
  };
};

export default connect(null, Searchbar)(Searchbar);
