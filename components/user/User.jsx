import React from "react";

const User = ({ user }) => {
  //single user card
  return (
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
  );
};

export default User;
