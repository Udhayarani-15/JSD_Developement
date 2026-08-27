function Counter(){
    
    let hi = () =>{
        let count +=1;
    }
    return (
        <>
        <h1>Iam Counter</h1>
        <button onClick={hi}>Click Me</button>
        </>
    )
}
export default Counter;