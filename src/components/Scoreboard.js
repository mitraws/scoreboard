import React, { useState } from "react";
import Player from "./Player";
// import AddPlayerForm from "./AddPlayerForm"

export default function Scoreboard(props) {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  const player = players.map((players, index) => (
    <Player key={players.id} name={players.name} />
  ));

//   const players_sorted =
//   // first "copy" the array
//   [...players]
//   // then sort it with the `compare_score` callback function
//   .sort(compare_score);

// return // ...
// }

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <ul>{player}</ul>
    </div>
  );
}
