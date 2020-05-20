import React from "react";
import getUserData from "../utils/getUserData";
import ReposList from "./repos";
import { token } from "../../token";

const UserHeader = () => {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const username = "CampbellDocherty";
    const githubUrl = `https://api.github.com/users/${username}?access_token=${token}`;
    getUserData(githubUrl).then((data) => {
      console.log(data);
      setUserData(data);
    });
  }, []);

  if (!userData) {
    return null;
  }

  const { avatar_url, html_url, name, followers, repos_url, login } = userData;

  return (
    <div>
      <header>
        <section>
          <img src={avatar_url}></img>
          <h1>{name}</h1>
        </section>
        <h2>{html_url}</h2>
        <h3>{login}</h3>
        <h3>{followers}</h3>
      </header>
      {repos_url ? <ReposList url={repos_url} /> : null}
    </div>
  );
};

export default UserHeader;
