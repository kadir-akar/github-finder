import React from "react";
import { useState } from "react";
function Search(props) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      props.setAlert("Please enter something", "light");
      setTimeout(() => {
        props.setAlert();
      }, 2000);
    } else {
      setText("");
      props.seachUsers(text);
    }
  };
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Seach" className="btn btn-dark btn-block" />
      </form>
      {props.showClear && (
        <button className="btn btn-light btn-block" onClick={props.clearUsers}>
          Clear
        </button>
      )}
    </>
  );
}
export default Search;
