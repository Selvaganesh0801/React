import { useState } from "react";

function Three_State(){
    const [input,setInput]=useState('');
    const [active,setActive]=useState([]);
    const [complete,setComplete]=useState([]);
    let add=()=>{
        setActive([...active,input]);
        console.log(active)
    };
    let remove=(index)=>{
        let activedata=[...active];
        activedata.splice(index,1);
        setActive(activedata);
    };
    let comp=(index)=>{
        let activedata=[...active];
        let activeindx=activedata[index];
        setComplete([...complete,activeindx]);
        activedata.splice(index,1);
        setActive(activedata);
    };
    let clear=()=>{
        setInput(0)
    }
    console.log(complete)
    return(
        <>
        <div>
        <input type='number' onChange={(event)=>setInput(event.target.value)}></input>
        <button onClick={()=>add()}>ADD+</button>
        <button onClick={()=>clear()}>Clr()</button>
        <h2>{input}</h2>
        </div>
        <div>
        <h2>Active_List</h2>
        {active && active.map((value,index)=>{
            return(
                <div key={index}>
                    <span>{value}</span>&nbsp;
                    <button onClick={()=>remove({index})}>Remove-</button>&nbsp;&nbsp;
                    <button onClick={()=>comp(index)}>Complete</button>
                </div>
            )
        })} 
        </div>
        <div>
        <h2>Completed_List</h2>
        {complete && complete.map((value,index)=>{
            return(
                <div key={index}>
                    <h2>{value}</h2>
                </div>
            )
        })}
        </div> 
        </>
    )
}

export default Three_State;