import Childs from "./Child";
import Parents from "./Parent";

function Grand_Parent(){
    return(
        <>
        <div className="One">
            <h1>Name:-SelvaG...</h1>
            <h2>Age:21</h2>
            <h1>From:-Kumbakonam</h1>
            <div>{<Parents/>}</div>
            <div>{<Childs/>}</div>
        </div>
        </>
    )
}
export default Grand_Parent;