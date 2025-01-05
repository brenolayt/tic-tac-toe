import { useState } from "react";
import GameTile from "./GameTile";


export default function HomeScreen() {
    const [gameArr, setGA] = useState([
        "", "", "",
        "", "", "",
        "", "", ""
    ]);
    const [winner, setWinner] = useState(null);
    const [count, setCount] = useState(1);
    const [currentPlayer, setCurrentP] = useState("X");

    function checkWin(arr) {
        const winningCombinations = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8], 
          [0, 3, 6], 
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
      
        for (const combination of winningCombinations) {
          const [a, b, c] = combination;
          if (arr[a] !== "" && arr[a] === arr[b] && arr[a] === arr[c]) {
              return arr[a];
          }
        }
        return null;
      }

    function handleClick(ind) {
        if (gameArr[ind] !== "" || winner) return;
        const newGameArr = [...gameArr];
        newGameArr[ind] = currentPlayer;
        
        setGA(newGameArr);
        setCount(prevValue => prevValue + 1);

        const gameWinner = checkWin(newGameArr);

        if (gameWinner) {
            setWinner(gameWinner);
            setTimeout(() => {
                alert(`${gameWinner} won!`);
            }, 100);
        }

        if (count == 9) alert("Draw!");

        setCurrentP(currentPlayer == "X" ? "O" : "X");
    }

    return (
        <div className="h-3/4 w-3/6 bg-slate-50 rounded-xl grid grid-cols-3 grid-rows-3">
            {gameArr.map((el, index) => {
                return <GameTile key={index} onClick={() => handleClick(index)}>{el}</GameTile>
            })}
        </div>
    );
}