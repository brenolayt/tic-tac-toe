export default function Player({ name, symbol }) {
    return (
        <li>
            <span className="grid grid-cols-[3fr_4fr] h-full w-full gap-8 place-items-center px-4 text-xl">
                <span>{name}</span>
                <div className="flex justify-around mx-4 h-full w-full">
                    <span>{symbol}</span>
                    <button className="text-base">edit</button>
                </div>
            </span>
        </li>
    );
}
