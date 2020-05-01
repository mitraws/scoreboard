import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm"

export default function Scoreboard(props) {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sort_by, set_sort_by] = useState("score");

  function compare_score(player_a, player_b) {
    return player_b.score - player_a.score;
  }
  
  function compare_name(player_a, player_b) {
    return player_a.name.localeCompare(player_b.name);
  }
console.log("players:", players)

  // first "copy" the array
  const playerArrayCopy = [...players];
  // then sort it with the `compare_score` callback function
  let sortedPlayers

  switch (sort_by) {
    case "name":
      sortedPlayers = playerArrayCopy.sort(compare_name);

      break;

    default:
      sortedPlayers = playerArrayCopy.sort(compare_score);
      break;
  }

  const change_sorting = (event) => {
    // console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };
  //   console.log("SORTED:", sortedPlayers);

  //   console.log(players);



  // Defining the callback function:
  const incrementScore = (id, changeBy) => {
    // console.log("id:", id, "changeBy:", changeBy);

    const updatedPlayers = players.map((player) => {
    //  console.log("check player", player.name)
      if (player.id === id) {
      //  console.log("check 2")
        return {
          key: player.id,
          name: player.name,
          score: player.score + changeBy,
        } 
      }
      return player;
    });
    // console.log("Updated players:", updatedPlayers)
    set_players(updatedPlayers);
  };


  const addPlayer = name => {
    // console.log("Let's add a new player with the name:", name);
    const newPlayer = {
      id: players.length + 1,
      name: name,
      score: 0
    }
    const updatedPlayers = [...players, newPlayer]
    // console.log("New player:", newPlayer)
    set_players(updatedPlayers);
  };
  
  const player = sortedPlayers.map((players) => (
    <Player
      key={players.id}
      name={players.name}
      score={players.score}
      incrementScore={incrementScore}
      id={players.id}
    />
  ));

  const resetScore = () => {
    const resetPlayers = players.map((player, index) => {
      console.log("check player", player.name)

       return {
        key: index,
        key: player.id,
        name: player.name,
        score: player.score = 0,
       };
     })
     set_players(resetPlayers);
    };

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p>
        Player's scores: <button onClick={resetScore}>reset</button>
      </p>
      <ul>{player}</ul>
      <AddPlayerForm addPlayer={addPlayer}
      />
    </div>
  );
}
