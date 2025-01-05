import { useState } from "react";
import GameTile from "./GameTile";


export default function HomeScreen() {
    const [gameArr, setGA] = useState([
        "", "", "",
        "", "", "",
        "", "", ""
    ]);
    const [count, setCount] = useState(1);
    const [currentPlayer, setCurrentP] = useState("X");


    function handleClick(ind) {
        if (gameArr[ind] !== "") return;
        const newGameArr = [...gameArr];
        newGameArr[ind] = currentPlayer;
        
        setCurrentP(currentPlayer == "X" ? "O" : "X");
        setGA(newGameArr);
        setCount(prevValue => prevValue + 1);

        if (count == 9) alert("The End!");
    }

    return (
        <div className="h-3/4 w-3/6 bg-slate-50 rounded-xl grid grid-cols-3 grid-rows-3">
            {gameArr.map((el, index) => {
                return <GameTile key={index} onClick={() => handleClick(index)}>{el}</GameTile>
            })}
        </div>
    );
}