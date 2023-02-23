import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { UsersItem } from "./components/users/UsersItem";
import Search from "./components/users/Search";
import { useState } from "react";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const seachUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}
      &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // ekleme yap
    setUsers(res.data.items);
    setLoading(false);
  };

  return (
    <div>
      <Navbar title="Github-Finder" icon="fab fa-github" />
      <div className="container">
        <Search seachUsers={seachUsers} />
        {/* <UsersItem /> */}
        <div>
          {loading && <h3>Loading...</h3>}
          <div className="text-center" style={userStyle}>
            {users.map((user) => (
              <div className="card text-center">
                <img
                  src={user.avatar_url}
                  alt=""
                  className="round-img"
                  style={{ width: "60px" }}
                />
                <h3>{user.login}</h3>
                <div>
                  <a
                    href={user.html_url}
                    className="btn btn-dark btn-sm my-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
export default App;
