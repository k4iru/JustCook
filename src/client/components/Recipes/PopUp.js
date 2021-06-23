import React, { Component } from "react";
export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    const { fetchData } = this.props;
    console.log("test");

    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;{" "}
          </span>
          <p>
            This is where the recipe details would go IF I KNEW HOW TO DO IT
          </p>
        </div>
      </div>
    );
  }
}
