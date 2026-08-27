function Counter(){
    const[count,srt]
    let hi = () =>{
        console.log("Count = "+count);
        count += 1;
    }
    return (
        <>
        <h1>Iam Counter</h1>
        <button onClick={hi}>Click Me</button>
        </>
    )
}
export default Counter;