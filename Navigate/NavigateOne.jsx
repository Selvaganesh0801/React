import { useNavigate } from "react-router-dom";

function NavigateOne(){
    const nav=useNavigate();

    let Navigate=()=>{
        nav({
            pathname:"/nav-two",
        })
    }
return(
    <>
    <div>
        <h2>NAV_ONE</h2>
        <img src="{Code}" alt="Missing" />
    </div>
    <button onClick={()=>Navigate()}>Nav</button>
    </>
)
}
export default NavigateOne;
