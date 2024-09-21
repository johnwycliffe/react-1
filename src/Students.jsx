//kkk


function Students(props){
    return(
        <div className='Student'>
            <p> Name: {props.name}</p>
            <p> Age:  {props.age} </p>
            <p> Student:{props.isStudent ? "yes": "No" }</p>
        </div>
    );


}
export default Students