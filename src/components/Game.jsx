import { useState } from "react";
import GameTile from "./GameTile";


export default function HomeScreen() {
    const [gameArr, setGA] = useState(["1","","","","","","","",""]);


    return (
        <div className="h-3/4 w-3/6 bg-slate-50 rounded-xl grid grid-cols-3">
            {gameArr.map(el => {
                return <GameTile>{el}</GameTile>
            })}
        </div>
    );
}