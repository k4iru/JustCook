import React, { Component } from "react";

class HomeRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = { recipes: [] };
  }

  async componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    // Simple GET request using fetch
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=24bc79dcb1784fdd83ea0fc6356ef648&number=6",
      { headers }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ recipes: data.recipes });
        console.log(this.state.recipes);
      })
      .catch(() => {
        console.log("error");
      });
  }

  render() {
    if (this.state.recipes) {
      var showRecipes = this.state.recipes.map(function (showRecipes) {
        return (
          <div className="container">
            <div className="recipe-previews">
              <img src={showRecipes.image}></img>
              <h3>{showRecipes.title}</h3>
              <p>{showRecipes.summary}</p>
            </div>
          </div>
        );
      });
    }
    return <div class="container">{showRecipes}</div>;
  }
} //end of render

//sites being used:
// https://www.pluralsight.com/guides/fetching-data-updating-state-react-class
// https://reactjs.org/docs/faq-state.html
//
export default HomeRecipes;
