import React from "react";
class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div id="userCard">
        src={user.avatar_url}
        <img src="https://avatars.githubusercontent.com/u/83626945?v=4" />
        <a target="blank" href={user.html_url}>
          <h3>{user.name}</h3>
          <p> (user.login) </p>
          <p> Total Repositories: {user.public_repos}</p>
          <p>Total Followers: 1{user.followers}</p>
        </a>
      </div>
    );
  }
}
export default User;
