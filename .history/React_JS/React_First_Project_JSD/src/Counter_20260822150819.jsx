import { useState } from "react";

function Counter(){
    const[count,setCount] = useState(0);
    let hi = () =>{
    
    }
    return (
        <>
        <h1>Iam Counter</h1>
        <button onClick={hi}>Click Me</button>
        </>
    )
}
export default Counter;