// With this button, we are going to practice 3 methods of stying. 
// 1. External: put it in index.css.  
// 2. Modules: We make a folder only for the button. We include a special css file in that folder.
// 3. Inline: define a js constant with styles, and pass that into html element: style={styles}

// import styles from './Button.module.css'

function Button() {

    return (
        <button className="button">Click Me</button>
    );

}

export default Button