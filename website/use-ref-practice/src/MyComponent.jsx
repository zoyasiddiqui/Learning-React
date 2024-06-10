// useRef() = use Reference. does not cause re-renders when its value changes.
// when you want a component to remember some info, but you don't want 
// the information to trigger new renders

import React, {useEffect, useRef} from "react";

function MyComponent(){

    const inputRef = useRef(null);
    console.log(ref);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    };

    return(
        <div>
            <button onClick={() => handleClick()}>
                Click Me!
            </button>
            <input ref={inputRef}></input>
        </div>
    );

}

export default MyComponent