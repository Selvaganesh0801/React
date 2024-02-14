import { useEffect } from "react"

let fetchdata=async()=>{
    let data=await fetch('https://dummyjson.product')
    let final=await data.json
    setData(final.product)
}

useEffect(()=>{
    fetchdata()
},[])