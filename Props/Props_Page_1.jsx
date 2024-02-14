function Props_Page1(props){
    return(
        <>
        <tabel className="one">
            <th className="th" style={{color:'Maroon',backgroundColor:'lavender'}}>SERVICE - CENTER :
            <tr className="tr">
                <th>ServiceNo</th>
                <th>ServiceName</th>
                <th>Cost</th>
                <th>Location:</th>
                <th>Id:</th>
            </tr>
            <tr>
                <td>{props.no}</td>
                <td>{props.name}</td>
                <td>{props.cost}</td>
                <td>{props.loc}</td>
                <td>{props.id}</td>
            </tr>
            </th>            
        </tabel>
        </>
    )
}


export default Props_Page1;
