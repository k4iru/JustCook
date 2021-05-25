import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { UpdateQuery, UpdateResults } from "../../redux/Search/search-actions";
import { useHistory } from "react-router-dom";
import "./searchbar.css";

// destructure state and dispatch actions from store
const Searchbar = ({ query, UpdateQuery, UpdateResults }) => {
  let history = useHistory();

  // get search results
  const getResults = async (url, payload = {}) => {
    try {
      // request headers
      // add the payload  to the request body
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = response.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // on form submit make call to backend server to obfuscate api_key from spoonacular
  // TODO add other form inputs to add more options and pass all options as an object in payload
  const onSubmit = async (e) => {
    e.preventDefault();
    let { results } = await getResults("/api/search", {
      query: query,
      options: "test-options",
    });
    UpdateResults(results);

    // redirect
    history.push("/recipes");
  };

  // update state on change
  const onChange = (e) => {
    UpdateQuery(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search">Search Bar</label>
      <input
        className="search-input"
        name="search"
        type="text"
        placeholder="Search Meals..."
        value={query}
        onChange={onChange}
      />
      <input className="search-btn" type="submit" value="Search" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.search.query,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateQuery: (query) => dispatch(UpdateQuery(query)),
    UpdateResults: (results) => dispatch(UpdateResults(results)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
