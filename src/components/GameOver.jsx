export default function GameOver({ winner, resetGame }) {

    return (
        <div className="fixed w-[36rem] h-[32rem] border-4 bg-white grid place-items-center rounded-lg shadow-2xl grid-rows-2">
            <h2 className="font-bold text-6xl">{winner === "none" ? "Draw!" : `${winner} won!`}</h2>
            <button className="border-slate-900 rounded-md shadow-xl bg-slate-900 text-white px-12 py-2 
            text-4xl font-semibold hover:bg-white hover:text-slate-900 hover:border-4
            transition-all ease-in-out" onClick={resetGame}>Rematch</button>
        </div>
    );
}