import Search from "../components/users/Search";
import Users from "../components/users/Users";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  const searchUsers = async (text) => {
    setLoading(true);
    setUsers([]);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}
      &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };
  return (
    <>
      <div className="container mx-auto px-4 m-10 grid justify-items-center">
        <Search
          searchUsers={searchUsers}
          clearUsers={clearUsers}
          users={users}
        />
        {loading && (
          <div className="card w-60 bg-base-50 shadow-xlm-5 pt-5 text-center m-w-auto p-4  rounded-md flex items-center justify-center">
            <Image
              src={"/loading-gif.gif"}
              alt="my gif"
              height={50}
              width={50}
            />
          </div>
        )}
        <Users users={users} />
      </div>
    </>
  );
}
