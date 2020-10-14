import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function compare_score(a, b) {
  return b.score - a.score;
}

function compare_name(a, b) {
  return a.name.localeCompare(b.name);
}

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score");
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  console.log(players);

  const players_sorted =
    sort_by === "score"
      ? [...players].sort(compare_score)
      : [...players].sort(compare_name);

  function change_sorting(event) {
    set_sort_by(event.target.value);
  }

  function incrementScore(playerId) {
    // console.log(props);
    const id = playerId;
    // console.log(id);
    const new_players_array = players.map((player) => {
      // decide whether this player's score needs to be incremented
      if (player.id === id) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player,
          score: player.score + 1,
        };
      } else {
        // else, just keep them
        return player;
      }
    });
    set_players(new_players_array);
  }

  console.log(players_sorted);
  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      {players_sorted.map((player) => {
        return (
          <div key={player.id}>
            <Player
              incrementScore={incrementScore}
              id={player.id}
              name={player.name}
              score={player.score}
            />
          </div>
        );
      })}

      <AddPlayerForm />
    </div>
  );
}
