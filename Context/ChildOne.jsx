import { useContext } from "react";
import { ContextData } from "./ContextData";

function ChildOne(){
    let value= useContext(ContextData);
    return(
        <>
        <h2>ChildOne</h2>
        <h2>{value}</h2>
        </>
    )
}

export default ChildOne;