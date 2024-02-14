import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import { ContextData } from "./ContextData";

function Parent(){
    const [count,setCount]=useState(0);

    let inc=()=>{
        setCount(count+1);
        console.log(setCount)
    }

    let dec=()=>{
        setCount(count-1)
    }
    let clr=()=>{
        setCount(0)
    }

    return(
        <>
        <ContextData.Provider value={count}>
            <div>
                <h2>Parent</h2>
                <button onClick={()=>inc()}>+</button>
                <button onClick={()=>dec()}>-</button>
                <button onClick={()=>clr()}>X</button>
            </div>

            <div>
                <ChildOne />
            </div>

            <div>
                <ChildTwo />
            </div>
        </ContextData.Provider>
        </>
    )
}
export default Parent;