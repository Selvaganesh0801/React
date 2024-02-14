import { useEffect, useState } from "react";

function Search_Data(){
    const[data,setData]=useState("");
    const[list,setList]=useState([]);

    let API="https://dummyjson.com/products";

    let fetchdata=async ()=>{
        let dataapi=await fetch(`${API}/search?q=${data}`);
        let final=await dataapi.json();
        setList(final.products);
    };
    useEffect(()=>{
        if(data){
            fetchdata();
        }else{
            setList([]);
        }
    },[data]);
    return(
        <>
        <div>
            <input type="text" onChange={(event)=>setData(event.target.value)} />
        </div>
        <div>
            {list && list.map((val,ind)=>{
                return(
                    <div key={ind}
                    style={{border:"2px solid black",width:"80%",marginTop:"20px",}}>
                    <li>{val.title}</li>
                    <li>{val.description}</li>
                    <li>{val.brand}</li>
                    <img src={val.thumbnail}/>
                    </div>
                );
            })}
        </div>
        </>
    ); 
}
export default Search_Data;