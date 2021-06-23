import React, { Component, useEffect } from "react";
import PopUp from "./PopUp";

class HomeRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = { recipes: [], clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    // Simple GET request using fetch
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=87d924547a8348eb8d9a0b791d92498a&number=6",
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

  handleClick = (item) => {
    this.setState({
      clicked: !this.state.clicked,
    });
    console.log(item);
  };

  render() {
    //if data is there, create the recipe card
    if (this.state.recipes) {
      //.map being used to access all the recipes requested from api
      var showRecipes = this.state.recipes.map((recipe, i) => {
        return (
          <div className="container">
            <div className="recipe-previews">
              <div key={i}>{recipe.id}</div>
              <button onClick={this.handleClick.bind(recipe)}>
                <img src={recipe.image}></img>
                <h3>{recipe.title}</h3>
                <p>{recipe.summary}</p>
              </button>
            </div>
            {this.state.clicked ? <PopUp toggle={this.handleClick} /> : null}
            <PopUp fetchData={this.recipe} />
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
// https://github.com/k4iru/personal-site/blob/master/src/Components/Portfolio.js
// https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/
// https://reactjs.org/docs/handling-events.html

export default HomeRecipes;
