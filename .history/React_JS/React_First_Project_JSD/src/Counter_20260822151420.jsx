import { useState } from "react";

function Counter(){
    const[count,setCount] = useState(0);
    let hi = () =>{
        setCount(count+1);
        console.log("Count =")
    }
    return (
        <>
        <h1>Iam Counter</h1>
        <button onClick={hi}>Click Me</button>
        </>
    )
}
export default Counter;