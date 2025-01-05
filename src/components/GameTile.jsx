export default function GameTile({ children, ...props }) {
    const hoverClass = children == "" ? "hover:bg-gray-400" : "";
    const hoverClassBorder = children == "" ? "hover:border-none" : "";

    return (
        <div className={`w-full h-full grid place-items-center border-4 bg-slate-100 border-slate-900 box-border
      font-sans font-bold text-7xl ${hoverClass} transition-all ease-in-out duration-200 ${hoverClassBorder}`} {...props}>
        {children}
      </div>
    );
  }