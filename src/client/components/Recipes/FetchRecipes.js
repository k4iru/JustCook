import React, { Component } from "react";


class HomeRecipes extends Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //onclick event
    handleSubmit(e){
        console.log("hello");
    //connecting to get method in server.js
    let res = this.getRecipeData('/api/fetch');
    res.then(data => {
      console.log(data.results);
    });
    //preventing submit (return false;)
    e.preventDefault();

    }

    async getRecipeData() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=16d4e583d0e74c709a5598cd30b4798b');
        const data = await response.json();
        this.setState({ totalReactPackages: data.total })
    }
    
      render() {
          return (
              <form onSubmit={this.handleSubmit}>
                  <input type="submit" value="Fetch" />
              </form>
          )
      }
    



}

export default HomeRecipes;

