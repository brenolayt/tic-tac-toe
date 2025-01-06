export default function Menu({ title = "TIC TAC TOE", buttonTxt = "PLAY", onC }) {

    return (
        <div className="display grid grid-rows-2 size-[28rem] border-4 place-items-center grid-cols-1 shadow-2xl bg-slate-100 rounded-xl p-2
        transition-all transform animate-popUp">
            <h1 className="text-5xl font-mono font-bold text-slate-800">{title}</h1>
            <button onClick={onC} className="text-3xl border-[4px] border-slate-900 px-14 py-2 rounded-lg bg bg-slate-950 text-slate-100
            shadow-xl hover:bg-slate-100 hover:text-slate-900 transition-all ease-in-out font-bold">
            {buttonTxt}
            </button>
        </div>
    );
}