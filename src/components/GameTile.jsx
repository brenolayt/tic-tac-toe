export default function GameTile({ children, ...props }) {
    const hoverClass = children == "" ? "hover:bg-gray-400 hover:border-none" : "";

    return (
        <div className={`w-full h-full grid place-items-center border-8 bg-stone-700 border-slate-300 box-border
      font-sans font-bold text-7xl text-white ${hoverClass} transition-all ease-in-out duration-200`} {...props}>
        {children}
      </div>
    );
  }