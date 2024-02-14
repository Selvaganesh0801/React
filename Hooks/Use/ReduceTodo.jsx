import { useReducer } from "react";

const reduce=(state,action)=>{
    const{type,payload}=action;

    switch(type){
        case "input":
            return{
                ...state,
                todo:payload,
            };
        case "add_to_active":
            return{
                ...state,
                active:[...state.active,state.todo],
                todo:"",
            };
        case "remove":
            let updatelist=[...state.active];
            let final=updatelist.splice(payload,1);
            console.log(final)
        return{
            ...state,active:updatelist
            }
        case "done":
            let activelist=[...state.active];
            let completelist=activelist.splice(payload,1);
            return{
                ...state,completed:[...state.completed,completelist],
                active:[...activelist],
            }
            default:
                return state;
    }
};

function Reduce(){
    const[state,dispatch]=useReducer(reduce,{todo:"",active:[],completed:[]});
    return(
        <>
        <div className="container">
        <div className="todo">
            <h2 className="head">{state.todo}</h2>
            
            <input onChange={(eve)=>dispatch({type:"input",payload:eve.target.value})} />
            <button onClick={()=>dispatch({type:"add_to_active"})}>Add</button>
        </div>
        
        <div className="main">
        <div className="active">
            <h2>Active List</h2>
            {state.active && state.active.map((val,ind)=>{
                return(
                    <div key={ind}>
                        <h2>{val}</h2>

                        <button onClick={()=>dispatch({type:"remove",payload:ind})}>Delete-X</button>
                        <button onClick={()=>dispatch({type:"done",payload:ind})}>Complete-!</button>
                        </div>
                )
            })}
            </div>
        <div className="complete"> 
            <h2>Complete List</h2>
            <div>
                {state.completed && state.completed.map((val,indx)=>{
                    return(
                        <div key={indx}>
                            <h2>{val}</h2>
                            <button>Successfully Added !</button>
                        </div>
                    );
                })}
            </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Reduce;