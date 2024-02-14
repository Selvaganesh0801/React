import { useEffect, useState } from "react";

function Fetch_Data(){
    const[list,setList]=useState([]);
    let fetchdata=async()=>{
        let data=await fetch("https://dummyjson.com/products");
                                                                                                               
        let final=await data.json();
        setList(final.products);
    };
    console.log(list)

    useEffect(()=>{
        fetchdata();
    },[]);
    return(
        <>
        {list && list.map((val,ind)=>{
            return(
                <div key={ind} style={{border:"2px solid black",marginTop:"20px"}}>
                    <li>
                        {" "}
                        <b>NAME:{val.title}</b>
                        </li>
                     <li>
                        {" "}
                        <b>DESCRIPTION:{val.thumbnail}</b>
                        </li>
                    <li>
                        {" "}
                        <b>BRAND:{val.brand}</b>
                        </li>
                </div>
            )
        })}
        </>
    )
}
export default Fetch_Data;