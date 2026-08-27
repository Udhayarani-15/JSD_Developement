import { useState } from "react";

function Counter(){
    const[count,setCount] = useState(0);
    let hi = () =>{
        setCount(count+1);
        console.log("Count = "+count);
    }
    let he = () =>{
        setCount(count-1);
        console.log("Count = "+count);
    }

    return (
        <>
        <h1>Iam Counter</h1>
        <button onClick={hi}>Click Inc Me</button><br/>><br/>>
        <button onClick={he}>Click Dec Me</button>


        </>
    )
}
export default Counter;