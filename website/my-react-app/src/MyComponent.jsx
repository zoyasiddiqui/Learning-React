
import React, {useState} from 'react';

function MyComponent() {

    //name in this case is what we call a "stateful variable". if we ever want to change something
    // about our stateful variable, we do it through the setter function (setName)
    // when the stateful variable is accessed with its setter function, it triggers a re-render of the virtual DOM. 
    // that's why the function below works and updates the text on your website immediately, 
    // but if you had just set name = "Zoya" it wouldn't have.
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Zoya");
    };

    const incrementAge = () => {
        setAge(age + 1);
    };

    const toggleIsEmployed = () => {
        setIsEmployed(!isEmployed)
    };

    return (
        <div>
            <p>Name: {name}</p>
            <button className='button' onClick={updateName}>Update Name</button>

            <p>Age: {age}</p>
            <button className='button' onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button className='button' onClick={toggleIsEmployed}>Toggle Employment Status</button>
        </div>
    );

}

export default MyComponent