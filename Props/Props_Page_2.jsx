function Props_Page2(props){
    let {name,age,course,fees,time}=props
    return(
        <>
        <table className="two">
        <th className="th" style={{color:'white',backgroundColor:'gray'}}>STUDENT 'S DETAILS :
            <tr className="tr">
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Fees</th>
                <th>Timing</th>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{course}</td>
                <td>{fees}</td>
                <td>{time}</td>
            </tr>
            </th>  
        </table>
        </>
    )
}
export default Props_Page2;