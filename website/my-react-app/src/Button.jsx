// With this button, we are going to practice 3 methods of stying. 
// 1. External: put it in index.css.  
// 2. Modules: We make a folder only for the button. We include a special css file in that folder.
// 3. Inline: define a js constant with styles, and pass that into html element: style={styles}

// import styles from './Button.module.css'

function Button() {

    // write a function within a function, fine to do in this case!
    const handleClick = (e) => console.log(e);
    //to understand how we got e.target.textContent, check out the SyntheticBaseEvent thing that
    //is printed when you call handleClick(). It has attributes!
    const handleClickButtonName = (e) => e.target.textContent = "CHANGED NAME";
    const handleClick2 = (name) => console.log(`${name}, stop clicking!`); 
    let count = 0;
    const handleClick3 = () => {
        count++;
        console.log(`You clicked me ${count} times`);
    };

    return (
        // using the arrow function in onClick prevents the function from being called right away.
        // if we don't do this, the function will be called before we even click a button
        <>  
            <button className="button" onClick={(e) => handleClick(e)} onDoubleClick={(e) => handleClickButtonName(e)}>Click Me for Event</button>
            <button className="button" onClick={() => handleClick2("Zoya")}>Click Me</button>
            <button className="button" onClick={() => handleClick3()}>Click Me to Count</button>
        </>
    );

}

export default Button