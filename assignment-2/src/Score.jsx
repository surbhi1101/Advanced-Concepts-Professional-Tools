import useCounter from "./useCounter"
function Score() {
    const { count, increment, reset } = useCounter(2, 3);
    return (
        <div className="container">
            <h2>Subject Score</h2>
            <h3>Count:{count}</h3>
            <button onClick={increment} className="btn">+</button>
            <button onClick={reset} className="btn">Reset</button>
        </div>
    )
}

export default Score