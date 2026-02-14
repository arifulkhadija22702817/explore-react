import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleSubtract = () => {
        const newCount = count - 1;
        setCount(newCount);

    }

    return (
        <div style={{ border: '2px solid blue' }}>
            <h3>Counter: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleSubtract}>Subtract</button>
        </div>
    )
}