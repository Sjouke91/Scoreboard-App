import React from "react";

export default function player(props) {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  };

  return (
    <div>
      <li className="Player">
        <p>
          Hello {props.name} Your score: {props.score}
          <button onClick={onClickIncrement}>increment</button>
        </p>
      </li>
    </div>
  );
}
