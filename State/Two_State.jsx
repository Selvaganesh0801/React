import { useState } from "react";
// How to get value in input box show in UI
function State(){
    const [data,setData]=useState('Enter Any One!')
    return(
        <>
        <h2>{data}</h2>
        <input type='' onChange={(event)=>setData(event.target.value)}></input>
        </>
    )
}

let op=[
    {
        Name:'Selva',
        id:1,
        Age:21,
        College:'Annai',
    },
    {
        Name:'Ganesh',
        id:2,
        Age:22,
        College:'Arasu',
    },
    {
        Name:'SelvaG',
        id:3,
        Age:23,
        College:'Mass',
    },
];

// Give id value to take all obj values in console

function Two_State(){
    const [data,setData]=useState(0);
    let find=()=>{
        let output=op.filter((val)=>val.id == data);
        console.log(output)
    }
    return(
        <>
        <div>
            <input type="number" onChange={(even)=>setData(even.target.value)}></input>
            <button onClick={()=>find()}>Find_!</button>
        </div>
        </>
    )
}

// same on the function this can be print in UI

let TState=()=>{
    const [data,setdata]=useState(0);
    const [store,setStore]=useState([]);
 
    let out=()=>{
    let ot=op.filter((val)=>val.id == data)
    if(ot.length>0){
        setStore(op[0])
        console.log(ot)
    }else{
        setStore('Nill');
    } 
    }
    return(
        <> 
        <input type='number' onChange={(eve)=>setdata(eve.target.value)}></input>
        <button onClick={()=>out()}>Find</button>
        <ul>
            <li>{store.Name}</li>
            <li>{store.id}</li>
            <li>{store.Age}</li>
            <li>{store.College}</li>
        </ul>
        </>
    )
}
export default TState;