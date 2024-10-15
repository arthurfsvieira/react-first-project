function Square () {
    return(
        <div className="w-52 h-52 bg-red-500 text-white">
            Text inside my square.
        </div>
    );
};

export const Circle = () => {
    return (
        <div className="w-52 h-52 bg-blue-500 text-white rounded-full">
            Text inside my circle.
        </div>
    );
}

export default Square;