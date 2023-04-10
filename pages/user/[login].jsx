import React, { useState, useEffect } from "react";
const SingleUser = ({ userStats }) => {
  const [repos, setRepos] = useState([]);
  const getUserRepos = async (username) => {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await res.json();
    setRepos(data);
    console.log(data);
  };

  useEffect(() => {
    getUserRepos(userStats.login);
  }, []);
  return (
    <div className="rounded-xl container m-auto px-4 flex mt-10 flex-center ">
      <div className="m-auto flex">
        <div>
          <img
            className="rounded-xl border-2 border-gray-600 "
            src={userStats.avatar_url}
            alt={userStats.login}
            style={{ width: "172px" }}
          />
          <p className="card-title mt-6 rounded-l p-1 border-b-2 border-gray-600">
            {userStats.login}
          </p>
          <div>
            <ul className=" list-none text-left  border-2 border-gray-600 mt-2 ">
              <li className="m-3">
                <strong>Followers: </strong>
                {userStats.followers}
              </li>
              <li className="m-3">
                <strong>Following: </strong>
                {userStats.following}
              </li>
              <li className="m-3">
                <strong>Public Repos: </strong>
                {userStats.public_repos}
              </li>
              <li className="m-3">
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
              className="ml-10 p-3 rounded-xl border border-gray-700 mb-3"
            >
              <a
                href={repo.clone_url}
                target="_blank"
                className="btn w-60 mb-2 text-center rounded-md bg-slate-900 hover:btn-primary flex"
              >
                <p className="mr-1">{repo.name}</p>
                <i className=" fas fa-link"></i>
              </a>
              {repo.language && (
                <span className="badge badge-success mb-2 mt-1">
                  {repo.language}
                </span>
              )}
              <p className="text-left">{repo.description}</p>
            </div>
          ))}
        </div>
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
