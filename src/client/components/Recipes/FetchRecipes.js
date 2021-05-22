import React, { Component } from "react";

class HomeRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };

    this.getRandomRecipes = this.getRandomRecipes.bind(this);
  }

  async getRandomRecipes() {
    const headers = { "Content-Type": "application/json" };
    // Simple GET request using fetch
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=16d4e583d0e74c709a5598cd30b4798b&number=3",
      { headers },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch(() => {
        console.log("error");
      });
  }

  async componentDidMount() {
    const recipes = await this.getRandomRecipes();
    this.setState({ recipes });
  }

  render() {
    return (
        <div>
           <h1> test </h1>
        </div>
    );
  }
}

export default HomeRecipes;

