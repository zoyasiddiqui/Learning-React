
function List(props) {

    // STRINGS TO LIST

    // const fruits = ["a","b","c","d","e","f"];
    // // We need to convert this list of strings to a list of item elements to display properly
    // const listItems = fruits.map(f => <li>{f}</li>); //this is just some simple javascript syntax
    // return(<ul>{listItems}</ul>);

    // OBJECTS TO LIST
    const objFruits = [{name:"a",pos:1},{name:"b",pos:2},{name:"c",pos:3},{name:"d",pos:4},{name:"e",pos:5},{name:"f",pos:6}];
    // &npsb; puts a space in between the objects
    const listItems = objFruits.map(o => <li key={o.pos}>{o.name}: &nbsp; {o.pos}</li>);

    const secondList = props.passedList.map(p => <li key={p.pos}>{p.name}</li>);
    return(<>
        <ul>{listItems}</ul>
        <ul className="list-items">{secondList}</ul>
    </>);

}

// left out proptypes and default props here

export default List