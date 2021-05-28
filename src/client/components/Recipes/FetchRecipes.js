import React, { Component } from "react";
import { connect } from "react-redux";





class HomeRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
  }

  async componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    // Simple GET request using fetch
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=6c1b18be8a9e4491b41b8f01d02a9299&number=6",
      { headers },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
           

        var recipeList = "";
    
        for(let i in data.recipes) {
          recipeList += "<button onClick={this.onClickHandler()} class='recipe-previews'>"+data.recipes[i].id;
          recipeList += "<img src='"+data.recipes[i].image+"' height='200'/>";
          recipeList += "<h3>"+data.recipes[i].title+"</h3>";
          recipeList += "<p>"+data.recipes[i].summary+"</p>";
          recipeList += "</button>";
          this.setState ({ data });
        }
        document.getElementById("replace").innerHTML = recipeList;
        this.onClickHandler();
      })
      .catch(() => {
        console.log("error");
      });

  }

  render() {
    return (
        <div id="replace">
        </div>
    );
  } //end of render 
  
}

function onClickHandler() {
  //able to retrieve id if specified array ex: this.state.data.recipes[1].id
  console.log(this.state.data.recipes.title);
  //once ID is retrieved, assign ID to variable
  // let clickID = this.state.data.recipes.id
  //pass variable through api call: https://api.spoonacular.com/recipes/{$clickID}/information
  //extract data: title, image, readyinminutes, extendedingredients
  //render data 
};




export default HomeRecipes;

