import React, {useState} from 'react';

function MyComponent4() {

    const [car, setCar] = useState({year:2004,
        make:"Ford",
        model:"Mustang"});

    function handleYearChange(event){
        // why do we have ...car?
        //if we just put year: event.target.value, then it would create an entirely new object, but
        // we don't know make or model of that object. so ...car includes all the old properties of car.
        // then, we put down our new year because js will take latest value of the key.
        // also, we don't use the variable car bc we want to update prev state, not current.
        setCar(c => ({...c, year: event.target.value}))
    }

    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}))
    }

    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }

    return (<div>
        <p>Your fav car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>);

}
export default MyComponent4