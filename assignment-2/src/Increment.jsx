import useCounter from "./useCounter"
function Increment() {
    const { count, increment, reset } = useCounter(1, 2);
    return (

        <div className="container">
            <h2>Increment in %</h2>
            <h3>Increment:{count}</h3>
            <button className="btn" onClick={increment}>+</button>
            <button className="btn" onClick={reset}>Reset</button>
        </div>
    )
}
export default Increment