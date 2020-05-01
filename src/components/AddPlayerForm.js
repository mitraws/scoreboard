import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");
// console.log("name:", name)
  const changeInput = (event) => {
    console.log("new input value:", event.target.value);
    set_name(event.target.value);

    function handleSubmit(event) {
      event.preventDefault();
      return props.addPlayer
    set_name("")}

  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={changeInput}
        />{" "}
        <button onClick={() => {props.addPlayer(name)}}>Add</button>
      </p>
    </div>
  );
}

