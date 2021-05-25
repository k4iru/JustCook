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
      "https://api.spoonacular.com/recipes/random?apiKey=4e775e84b8b047b0816e621e527af46d&number=6",
      { headers },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        var recipeList = "";
    
        for(let i in data.recipes) {
          recipeList += "<a href='Recipe.js?id="+data.recipes[i].id+"'><div class='recipe-previews'>";
          recipeList += "<img src='"+data.recipes[i].image+"' height='200'/>";
          recipeList += "<h3>"+data.recipes[i].title+"</h3>";
          recipeList += "<p>"+data.recipes[i].summary+"</p>";
          recipeList += "</div><a>";
        }
        document.getElementById("replace").innerHTML = recipeList;
        //return data;
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
        <div id="replace">
        </div>
    );
  }
}

export default HomeRecipes;

