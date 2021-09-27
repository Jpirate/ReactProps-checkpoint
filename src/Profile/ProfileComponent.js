import React from "react";
class Profile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.children} alt="thumb" />
        <h1 style={{ color: "red" }}>fullName : {this.props.name}</h1>
        <p>bio : {this.props.bio}</p>
        <h2 style={{ backgroundColor: "lightblue" }}>
          profession : {this.props.profession}
        </h2>
      </div>
    );
  }
}
export default Profile;

Profile.defaultProps = {
  name: "gimy",
  bio: "alala",
  profession: "sbak",
  children: "https://via.placeholder.com/150/#FF0000",
};
