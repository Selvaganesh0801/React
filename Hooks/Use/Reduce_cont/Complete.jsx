import { useContext } from "react";
import { TodoContext } from "./Reduce_Context";

function Complete(){
    const{data}=useContext(TodoContext)
    return(
        <>
        <div>
        <h2>Complete List</h2>
        <div style={{backgroundColor:data.backgroundColor,width:500}}>
            {data.complete && data.complete.map((val,ind)=>{
                return(
                    <div key={ind}>
                        <h2>{val}</h2>
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
}
export default Complete;