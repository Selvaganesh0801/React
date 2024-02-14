import { Link, Outlet } from "react-router-dom";
function Header(){
    return(
        <>
        <div>
            <Link to="/">Yellow</Link><br></br>
            <Link to="blue">Blue</Link><br></br>
            <Link to="green">Greens</Link><br></br>
            <Link to="teal">Teal</Link>
        </div>
        <Outlet />
        </>
    )
}
export default Header;
