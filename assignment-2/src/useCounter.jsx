import { useState } from "react"

function useCounter(startValue = 0, step = 1) {
    const [count, setCount] = useState(startValue);

    const increment = () => {
        setCount(count + step);
    }
    const reset = () => {
        setCount(startValue);
    }

    return { count, increment, reset };
}

export default useCounter