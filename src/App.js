import React from "react";
import Profile from "./Profile/ProfileComponent";

class App extends React.Component {
  state = {
    show: false,
  };
  content = () => {
    if (this.state.show) {
      return (
        <>
          <Profile name="ss" bio="balah" profession="sabbak">
            https://via.placeholder.com/150/#FF0000
          </Profile>
          <hr />
        </>
      );
    } else return null;
  };

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShow}>Show/Hide</button>
        {this.content()}
      </div>
    );
  }
}

export default App;
