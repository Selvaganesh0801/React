import { useState } from "react";

// function Single_State(){
//     const [data,setNew]=useState('Selva')
//     return(
//         <>
//         <div>
//             <h2>I'm:{data}</h2>
//             <button className="btn" onClick={()=>setNew('Ganesh')}>Click_1</button>
//             <button className="btn" onClick={()=>setNew('Karthi')}>Click_2</button>
//             <button className="btn" onClick={()=>setNew('Arun')}>Click_3</button>
//         </div>

//         </>
//     )
// }


function Single_State(){
    const[count,setCount]=useState(1);
    let incr=()=>{
        setCount(count+2)
    };
    let mul=()=>{
        setCount(count * 2)
    };
    let dec=()=>{
        setCount(count-1)
    };
    let clr=()=>{
        setCount(0)
    };
    let Dom=()=>{
        let dom=document.getElementById('one')
        dom.style.cssText='background-color:teal;border:2px solid red;'
    };
    let Dom1=()=>{
         let dom=document.getElementById('two')
        dom.style.cssText='background-color:red;border:2px solid lime;'
    };
    return(
        <>
        <h2>Count:{count}</h2>
        <button id='one' onClick={()=>Dom(incr())}>Increse+</button>
        <button  onClick={()=>Dom(dec())}>Decres-</button>
        <button id="two" onClick={()=>Dom1(mul())}>Multi(*)</button>
        <button onClick={()=>clr()}>Clear(c)</button>
        </>
    )
}

export default Single_State;