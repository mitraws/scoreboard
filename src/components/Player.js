import React from "react"

export default function Player(props) {
  // the event listener callback
// const onClickIncrement = () => {
//   // call the callback prop passed down from the scoreboard
//   props.incrementScore(props.id);
// };  
console.log("props?", props)
  return (
        <li className="Player">
          <p>{props.name} (score: {props.score}) 
           <button onClick={() => {props.incrementScore(props.id, 1)}}>+</button>
           <button onClick={() => {props.incrementScore(props.id, -1)}}>-</button>
           </p>
          </li>
        
        
        
      );
}