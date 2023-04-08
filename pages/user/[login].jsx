import React, { useState, useEffect } from "react";

const SingleUser = ({ userStats }) => {
  //get user repos
  const [repos, setRepos] = useState([]);
  const getUserRepos = async (username) => {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await res.json();
    setRepos(data);
  };

  useEffect(() => {
    getUserRepos(userStats.login);
  }, []);

  console.log(userStats);
  return (
    <div className="container mx-auto px-4 m-10 grid justify-items-center">
      <div className="border card w-60 bg-base-50 shadow-xlm-5 pt-5 text-center m-w-auto p-4  rounded-md flex items-center justify-center">
        <img
          className="rounded-xl"
          src={userStats.avatar_url}
          alt={userStats.login}
          style={{ width: "100px" }}
        />
        <div className="card-body items-center">
          <p className="card-title mb-5 mt-0">{userStats.login}</p>
        </div>
        <div>
          <ul className="list-none text-left">
            <li>
              <strong>Followers: </strong>
              {userStats.followers}
            </li>
            <li>
              <strong>Following: </strong>
              {userStats.following}
            </li>
            <li>
              <strong>Public Repos: </strong>
              {userStats.public_repos}
            </li>
            <li>
              <strong>Public Gists: </strong>
              {userStats.public_gists}
            </li>
          </ul>
        </div>
      </div>
      <div>
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="card w-60 bg-base-50 shadow-xlm-5 pt-5 text-center m-w-auto p-4  rounded-md flex items-center justify-center"
          >
            <p>{repo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SingleUser;
//get repos url
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.github.com/users/${context.params.login}`
  );
  const userStats = await res.json();

  return {
    props: {
      userStats,
    },
  };
};
