export default function GameTile({children}) {
    return (<div className="w-auto h-auto border-4 border-gray-900 grid place-content-center font-sans font-bold text-5xl hover:bg-gray-500
    hover:text-gray-50 transition-all">
        {children}
    </div>);
}