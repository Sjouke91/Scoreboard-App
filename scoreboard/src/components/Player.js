import React from "react";

export default function player(props) {
  return (
    <div>
      <li className="Player">
        <p>Hello {props.name}</p>
      </li>
    </div>
  );
}
