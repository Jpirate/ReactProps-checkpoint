import React from "react";
import Profile from "./Profile/ProfileComponent";

function App() {
  const handleName = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    <div>
      <Profile name="ss" bio="balah" profession="sabbak" alertName={handleName}>
        https://via.placeholder.com/150/#FF0000
      </Profile>
      <Profile alertName={handleName} />
      <hr />
    </div>
  );
}

export default App;
