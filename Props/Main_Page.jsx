import Props_Page1 from "./Props_Page_1";
import Props_Page2 from "./Props_Page_2";

function Main_Page(){
    let datasCollection=[
        {
            ServiceNo:'SER_001',
            ServiceName:'Laptop Repair',
            Cost:100,
            Location:'Kolkata',
            Id:1,
           
        },
        {
            ServiceNo:'SER_002',
            ServiceName:'Mobile Repair',
            Cost:50,
            Location:'Mumbai',
            Id:2,
        },
        {
            ServiceNo:'SER_003',
            ServiceName:'TV Repair',
            Cost:70,
            Location:'Delhi',
            Id:3,
        },
        {
            ServiceNo:'SER_004',
            ServiceName:'PC Repair',
            Cost:120,
            Location:'Chennai',
            Id:4,
        },
];

let sObj=[
    {
        Name:'SelvaG',
        Age:21,
        Course:'Python',
        Fees:'30,000',
        Timing:'10.00',
    },
    {
        Name:'Karthi',
        Age:22,
        Course:'Java',
        Fees:'35,000',
        Timing:'10.30',
    },
    {
        Name:'Arun',
        Age:20,
        Course:'Mern',
        Fees:'35,000',
        Timing:'11.00',
    },
    {
        Name:'Muthu',
        Age:21,
        Course:'Python',
        Fees:'32,000',
        Timing:'10.00',
    },
]
    return(
        <>
        <div>
            {datasCollection.map((val,ind)=>{
                return(
                    <div key={ind}>
                     <Props_Page1 no={val.ServiceNo}name={val.ServiceName} cost={val.Cost} loc={val.Location} id={val.Id}/>
                    </div>
                )
            }
            )}
            
        </div>
        <div>
            {sObj.map((val,ind)=>{
                return(
                    <div key={ind}>
                    <Props_Page2 name={val.Name} age={val.Age} course={val.Course} fees={val.Fees} time={val.Timing}/>
                    </div>
                )
            })}
        </div>
        </>

    )
    
}
export default Main_Page;