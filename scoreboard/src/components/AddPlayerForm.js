import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [newPlayer, setNewPlayer] = useState();

  const addPlayer = () => {
    props.addPlayer(newPlayer);
  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          onChange={(event) => {
            setNewPlayer(event.target.value);
            console.log("this is value", newPlayer);
          }}
          type="text"
          placeholder="Name"
        />{" "}
        <button onClick={addPlayer}>Add</button>
      </p>
    </div>
  );
}
