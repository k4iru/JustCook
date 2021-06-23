import React, { Component } from "react";
export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    const { fetchData } = this.props;

    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <p>Recipe Details would go here</p>
        </div>
      </div>
    );
  }
}
