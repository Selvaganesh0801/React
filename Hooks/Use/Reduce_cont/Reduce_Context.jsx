import { createContext, useReducer } from "react";
import Active from "./ActiveList";
import Complete from "./Complete";

export const TodoContext=createContext();
const reduce=(data,action)=>{
    const{type,payload}=action;

switch(type){
    case "input":
        return{
            ...data,
            todo:payload,
            data:payload,
            backgroundColor:payload,

        };
    case "active_li":
        return{
            ...data,active:[...data.active,data.todo],
            todo:"",
        };
    case "remove":
        let up=[...data.active];
        let fn=up.splice(payload,1)
        console.log(fn)
        return{
            ...data,active:up
        };
    case "delete":
        let dl=[...data.active];
        let cmp=dl.splice(payload,1);
        return{
            ...data,complete:[...data.complete,cmp],
            active:[...dl],
        }
    default:
        return data;
}
}
function Reduce_Context(){
    const[data,dispatch]=useReducer(reduce,{todo:"",active:[],complete:[],data:"",backgroundColor:""})
            
    return(
        <>
        <div>
            <h1>{data.todo}</h1>
            <input type="text" onChange={(eve)=>dispatch({type:"input",payload:eve.target.value})}/>
            <div style={{backgroundColor:data.backgroundColor,width:500,height:100}}>
                {data.data}
            </div>
           </div>
           <TodoContext.Provider value={{data,dispatch}}>
            <div>
                <Active/>
            </div>
            <div>
                <Complete/>
            </div>

           </TodoContext.Provider>
        </>
    )
}
export default Reduce_Context;