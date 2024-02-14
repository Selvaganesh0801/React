function Childs(){
    let app=()=>{
        alert('Welcome To Greens Technology')
    }
    return(
        <div className="Three">
            <h1>Name:-Hassim...</h1>
            <h2>Age:21</h2>
            <h1>From:-Boombukar</h1>
            <button onClick={()=>app()}>Became A Developers!</button>
        </div>
    )
}
export default Childs;