import React from "react";
import { useState } from "react";
const Search = (props) => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else {
      props.searchUsers(text);
      setText("");
      setUsers([]);
    }
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
          {props.users.length > 0 && (
            <button
              className="btn btn-primary btn-sm my-1 mt-3"
              onClick={props.clearUsers}
              type="button"
            >
              Clear
            </button>
          )}
          {alert && (
            <div className="alert alert-error mt-3">
              <div className="flex-1">
                <label className="label text-x">
                  <label className="label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-alert-triangle"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#dc2626"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M12 9v2m0 4v.01" />
                      <path d="M12 3L12 3a9 9 0 0 1 9 9l0 0a9 9 0 0 1 -9 9l0 0a9 9 0 0 1 -9 -9l0 0a9 9 0 0 1 9 -9" />
                    </svg>
                  </label>
                  Please enter something!
                </label>
              </div>
            </div>
          )}
        </div>
      </form>
      <div className=" grid grid-cols-1 content-center gap-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 px-4 m-3 flex-col ">
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
export default Search;
