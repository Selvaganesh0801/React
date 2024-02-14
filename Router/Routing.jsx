import { BrowserRouter, Route, Routes } from "react-router-dom";
import Yellow from "./Yellow";
import Blue from "./Blue";
import Green from "./Green";
import Header from "./Header";
import Teal from "./Teal";

function Routing(){
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Yellow/>}/>
            <Route path="blue" element={<Blue/>}/>
            <Route path="green" element={<Green/>}/>
            <Route path="teal" element={<Teal/>}/>
        </Routes>
        
        </BrowserRouter>
       
        </>
    );
}
export default Routing;