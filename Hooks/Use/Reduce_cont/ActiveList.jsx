import { useContext } from "react";
import { TodoContext } from "./Reduce_Context";


function Active(){
const {data,dispatch}=useContext(TodoContext);
    return(
        <>
        <div>
            <button onClick={()=>dispatch({type:"active_li"})}>Add</button>
            <h2>Active List :</h2>
            <div style={{backgroundColor:data.backgroundColor,width:500}}>
                {data.active && data.active.map((val,ind)=>{
                    return(
                        <div key={ind}>
                            <h2>{val}</h2>
                            <button onClick={()=>dispatch({type:"remove",payload:ind})}>Remove</button>&nbsp;
                            <button onClick={()=>dispatch({type:"delete",payload:ind})}>Goooo</button>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default Active;