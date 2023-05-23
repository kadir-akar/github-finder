import React from "react";
import { useState } from "react";

import Alert from "../alertButton/Alert";
import SearchButton from "../searchButton/SearchButton";

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
          <SearchButton setText={setText} />
          {props.users.length > 0 && (
            <button
              className="btn btn-primary btn-sm my-1 mt-3"
              onClick={props.clearUsers}
              type="button"
            >
              Clear
            </button>
          )}
          {alert && <Alert />}
        </div>
      </form>
    </>
  );
};
export default Search;
