import React from "react";
import Header from "../components/Navigation/Header";
function Sell({userAuthenticated,user}){
    return (
        <Header userAuthenticated={userAuthenticated} user={user}/>
    )
}

export default Sell;