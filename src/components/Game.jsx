import { useState } from "react";
import GameTile from "./GameTile";
import Player from "./Player";


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
            return;
        }

        if (count == 9) {
            setWinner("none");

            setTimeout(() => {
                alert("Draw!");
            }, 100);
        };

        setCurrentP(currentPlayer => currentPlayer == "X" ? "O" : "X");
    }


    return (
        <div className="h-3/4 w-3/6 rounded-sm grid grid-rows-[1fr_3fr] bg-slate-300 shadow-2xl place-items-center p-8">
            <ul className="grid w-full h-3/4 grid-cols-2 place-items-center">
                <Player name="PLAYER 1" symbol="X" isActive={currentPlayer === "X"}/>
                <Player name="PLAYER 2" symbol="O" isActive={currentPlayer === "O"} />
            </ul>
            <div className="h-full w-3/4 rounded-xl grid grid-rows-3 grid-cols-3 gap-1">
                {gameArr.map((el, index) => {
                    return <GameTile key={index} onClick={() => handleClick(index)}>{el}</GameTile>
                })}
            </div>
        </div>
    );
}