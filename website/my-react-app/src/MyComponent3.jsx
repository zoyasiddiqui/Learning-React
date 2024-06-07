//updater function = A function passed as an argument to setState().
//Allow for safe updates based on the previous state
//Used with multiple state updates and asynchronous functions
//Good practice to use updater functions

import React, {useState} from 'react';

function MyComponent3() {

    const [count, setCount] = useState(0);

    function increment(){
        // uses the current state to calculate the next state
        // set functions do not trigger an update
        // React batches together state updates for performance reasons
        // Next state becomes the current state after an update, which is why the following only updates once

        setCount(count + 1);
        //basically, count has not updated yet here. so the next two count values are not count + 1, it is just count.
        // also, count + 1 and count => count + 1 do the same thing. both update CURRENT state of the variable
        setCount(count => count + 1);

        // if we wanted to update the PREVIOUS state of the variable instead of the current one, 
        // we could instead do: setCount(c => c + 1) or some other variable name that is NOT count.
    }

    return (<div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
    </div>)

}
export default MyComponent3