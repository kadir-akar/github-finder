import React from "react";
import { useState } from "react";
import axios from "axios";
const Search = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const seachUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}
      &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(text);
    seachUsers(text);
    setText("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <div className="input-group ">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered "
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div className=" grid grid-cols-1 content-center gap-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2  mt- px-4 m-10 flex-col ">
        {users.map((user) => (
          <div
            key={user.id}
            className=" hover:border-dotted border-2 border-gray-600 card w-60 bg-base-50 shadow-xlm-5 pt-5 text-center m-w-auto 
            p-4  rounded-md flex items-center justify-center"
          >
            <img
              className="rounded-xl"
              src={user.avatar_url}
              alt={user.login}
              style={{ width: "100px" }}
            />
            <div className="card-body items-center text-center">
              <p className="card-title mb-5 mt-0">{user.login}</p>
              <a
                href={user.html_url}
                className="card-title btn text-xl hover:btn-primary"
              >
                More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridGap: "1rem",
};
export default Search;
