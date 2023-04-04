import React from "react";
import axios from "axios";
import { useState } from "react";

const Users = async (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
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

  return <div></div>;
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
export default Users;
