import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Users } from "./Users";

export const UsersItem = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(
      "process.env.REACT_APP_GITHUB_CLIENT_ID",
      process.env.REACT_APP_GITHUB_CLIENT_ID
    );
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers(res.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <div className="container">
        {loading && <h3>Loading...</h3>}
        <div className="text-center">
          <Users users={users} />
        </div>
      </div>
    </div>
  );
};
