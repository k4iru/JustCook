import React, { useState } from "react";
import { connect } from "react-redux";
import { UpdateUser } from "../../redux/User/user-actions";
import "./Profile.css";

function changePass() {
  console.log('clicked');
}

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state={
      first:this.props.first,
      last:this.props.last,
      email:this.props.email,
      username:this.props.username
    }
    console.log(this.state.first);
  }
  componentWillMount() {
    if(this.props.user !==null) {
      console.log('authenticated');
    } else {
      console.log('not authenticated');
    }
  }
  render(){
    let comp;
    if(this.props.user !==null) {
      comp = 
      <div className='container'>
        <h2>{`${this.state.first} ${this.state.last}`}</h2>
        <p>username: {this.state.username}</p>
        <p>email: {this.state.email}</p>
        <div className="password-slot">
          <p>Change Password</p>
          <p>password: {this.state.password}</p>
          <button onClick={changePass}>Change</button>
        </div>
      </div>;
    } else {
      comp = <div className='noncontainer'></div>;
    }
    return (
      <div>
        {comp}
      </div>
    );
  }
}

// REDUX
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateUser: (user) => dispatch(UpdateUser(user)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps )(Profile);