
import React, {useState} from 'react';

// onChange event handler updates everytime the value changes

function MyComponent2() {

    const [name, setName] = useState();
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState();
    const [shipmentMethod, setShipmentMethod] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    };

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    };

    function handlePayment(event) {
        setPayment(event.target.value);
    };

    function handleShipmentMethod(event) {
        setShipmentMethod(event.target.value);
    };

    return(
        <div>
            <input value={name} onChange={handleNameChange} placeholder='Enter name here'/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <select onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                checked={shipmentMethod === "Pick Up"}
                onChange={handleShipmentMethod}/>
                Pick Up</label>
            <label>
                <input type="radio" value="Delivery"
                checked={shipmentMethod === "Delivery"}
                onChange={handleShipmentMethod}/>
                Delivery</label>

        </div>
    )

}

export default MyComponent2