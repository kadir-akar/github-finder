import React from "react";
import { useState } from "react";
function Search(props) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    props.seachUsers(text);
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
    </>
  );
}
export default Search;
