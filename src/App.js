import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>GITHUB INFO</h1>
        <form>
          <input placeholder="Github Handle"></input>
          <button>Search</button>
        </form>
        <div id="UserCard">
          <img src="https://avatars.githubusercontent.com/u/83626945?v=4" />
          <a target="blank" href="https://github.com/bezzantsam">
            <h3>Sam Bezzant</h3>
            <p> (bezzantsam) </p>
            <p> Total Repositories: 70</p>
            <p>Total Followers: 15</p>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
