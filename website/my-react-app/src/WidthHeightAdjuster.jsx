import { useEffect } from "react";
import { useState } from "react"

function WidthHeightAdjuster() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    });
    
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>Window width: {width}px</p>
        <p>Window height: {height}px</p>
    </>);
}

export default WidthHeightAdjuster