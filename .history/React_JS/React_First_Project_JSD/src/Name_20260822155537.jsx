import { useState } from "react";
let Name = () =>{
    const[name,setName] =useState("");
    return (<>
     <input
     type="text"
     value={name}
     onChange={(e) => {
        console.log()
     }}
     />
    
    </>)
}