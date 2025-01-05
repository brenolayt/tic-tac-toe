export default function GameTile({ children, ...props }) {
    return (
      <div className="w-full h-full grid place-items-center border-4 border-gray-900 box-border
      font-sans font-bold text-7xl hover:bg-gray-500 hover:text-gray-50 transition-all" {...props}>
        {children}
      </div>
    );
  }