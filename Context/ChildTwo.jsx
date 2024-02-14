import { useContext } from "react";

import { ContextData } from "./ContextData";

function ChildTwo(){
    let count= useContext(ContextData);
    return(
        <>
        <h2>ChildTwo</h2>
        <h2>{count}</h2>
        </>
    )
}

export default ChildTwo;