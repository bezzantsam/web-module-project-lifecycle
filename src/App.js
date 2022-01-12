import React from "react";
import User from "./components/User";

import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    currentUser: "bezzantsam",
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/83626945?v=4",
      html_url: "https://github.com/bezzantsam",
      name: "Sam Bezzant",
      login: "bezzantsam",
      public_repos: 70,
      followers: 15,
    },
    followers: [
      {
        login: "CaitlinTalbert",
        avatar_url: "https://avatars.githubusercontent.com/u/92820628?v=4",
        html_url: "https://github.com/CaitlinTalbert",
      },
      {
        login: "CaitlinTalbert",
        avatar_url: "https://avatars.githubusercontent.com/u/92820628?v=4",
        html_url: "https://github.com/CaitlinTalbert",
      },
      {
        login: "CaitlinTalbert",
        avatar_url: "https://avatars.githubusercontent.com/u/92820628?v=4",
        html_url: "https://github.com/CaitlinTalbert",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>GITHUB INFO</h1>
        <form>
          <input placeholder="Github Handle"></input>
          <button>Search</button>
        </form>
        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
