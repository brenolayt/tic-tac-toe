import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    return (
        <li>
            <span className="grid grid-cols-[3fr_4fr] h-full w-full gap-6 place-items-center px-4 text-xl">
                {isEditing ? <input className="w-32 grid place-items-center rounded-md opacity-70 animate-pulse font-semibold"
                defaultValuevalue={playerName} onChange={event => setPlayerName(event.target.value)} /> : <span className="font-semibold w-32 grid place-items-center overflow-hidden">{playerName}</span>}
                <div className="flex gap-4 h-full w-full">
                    <span className="text-2xl font-bold">{symbol}</span>
                    <button onClick={() => setEditing(prevValue => !prevValue)} className="text-base">{isEditing ? "Save" : "Edit"}</button>
                </div>
            </span>
        </li>
    );
}
