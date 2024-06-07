// useEffect() = React Hook that tells React to do some code when...
// this component re-renders
// this component mounts
// the state of a value changes

// useEffect(function, [dependencies])
// 1. useEffect(() => {}) runs after every re-render
// 2. useEffect(() => {}, []) runs only on mount
// 3. useEffect(() => (), [value]) runs on mount + when value changes

import React, {useState, useEffect} from "react";

function MyComponent7() {

    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // })

    // this is equivalent to the above
    useEffect(() => {
        document.title = `Count: ${count}`;

        return () => {
            //SOME CLEANUP CODE HERE
        }

    }, [count])

    function addCount() {
        setCount(c => c + 1);
    }

    return(<>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
    </>)

}

export default MyComponent7