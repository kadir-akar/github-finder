import "./App.scss";
import { Fragment } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Users } from "./components/users/Users";
import Search from "./components/users/Search";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import { About } from "./components/pages/About";
import { NavLink } from "react-router-dom";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  //search github users
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
  //clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  return (
    <Fragment>
      <Navbar title="Github-Finder" icon="fab fa-github m-5" />

      <div className="container">
        <Search
          seachUsers={seachUsers}
          clearUsers={clearUsers}
          setAlert={setAlert}
          showClear={users.length > 0 ? true : false}
        />
        {loading && <h3>Loading...</h3>}
        {alert && (
          <div className="alert center">
            <i className="fas fa-info-circle"></i> {alert}
          </div>
        )}
        <Users users={users} />
      </div>
    </Fragment>
  );
}
export default App;
