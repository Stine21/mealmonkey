import { useState, useEffect } from 'react';

const Counter = () => {

    const [count, setCount] = useState(parseInt(localStorage.getItem("myCount")) || 0);

    useEffect(() => {
        localStorage.setItem("myCount", count)
    }, [count]);
    let countUp = () => {
        if (count <15) setCount(count + 1)

    }
    let countDown = () => {
        if (count > 0) setCount(count - 1)

    }
    return (
        <>
        <h2>{ count }</h2>
        <button onClick={countDown}>Tæl ned</button>
        <button onClick={countUp}>Tæl op</button>
        </>
    )
}

export default Counter;