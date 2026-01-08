import useCounter from "./useCounter"
function MatchScore() {
    const { count, increment, reset } = useCounter(0, 1);

    return (
        <div className="container">
            <h2>Match Score</h2>
            <h3>Score:{count}</h3>
            <button className="btn" onClick={increment}>+</button>
            <button className="btn" onClick={reset}>Reset</button>
        </div>
    )

}

export default MatchScore