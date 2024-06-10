
import React, {useState, createContext} from 'react';
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("BroCode");

    return(<div className="box">
        <h1>ComponentA</h1>
        <UserContext.Provider value={user}>
            <ComponentB user={user}></ComponentB>
        </UserContext.Provider>
    </div>)

}

export default ComponentA