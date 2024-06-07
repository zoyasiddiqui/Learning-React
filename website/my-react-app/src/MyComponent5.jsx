import React, {useState} from 'react';

function MyComponent5() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {

        //we use an underscore as like a placeholder

        //this sets food to the output of food.filter, 
        // and food.filter will output a list with all elements where index matches
        setFoods(foods.filter((_, i) => i != index));
    }

    return(<div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => 
            <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder='Enter food name'/>
        <button onClick={handleAddFood}>Add Food</button>
    </div>);

}
export default MyComponent5