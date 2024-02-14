function Alert(){
    let alrt=()=>{
        alert('First_Month_Class_Html')
    }
    let art=()=>{
        alert('Secon_Month_Class_Css')
    }
    let ar=()=>{
        alert('Third_Month_Class_Js')
    }
    let at=()=>{
        alert('Fourth_Month_Class_React')
    }
    return(
        <>
        <div className="task_1" style={{backgroundColor:'tomato',textAlign:'center',padding:'30px'}}> 
            <h2 style={{backgroundColor:"teal",color:"whitesmoke"}}>I'm SelvaG</h2>
            <h2>From:-Kumbakonam</h2>
        
        <p>Then I Have Basic Knowledge in Programming,So I Can Develope My Skills To Join Green's Technology</p>
        <button style={{backgroundColor:"red",border:'2px solid black',margin:'0px 10px',padding:'5px 10px'}} onClick={()=>alrt()}>One!</button>
        <button style={{backgroundColor:"yellow",border:'2px solid black',margin:'0px 10px',padding:'5px 10px'}} onClick={()=>art()}>Two!</button>
        <button style={{backgroundColor:"orange",border:'2px solid black',margin:'0px 10px',padding:'5px 10px'}} onClick={()=>ar()}>Three!</button>
        <button style={{backgroundColor:"lime",border:'2px solid black',margin:'0px 10px',padding:'5px 10px'}} onClick={()=>at()}>Four!</button>
        </div>
        </>

    );
        
}
export default Alert;