function Counter(){
    let count = 0;
    let hi = () =>{
        count += 1;
        alert(count)
    }
    return (
        <>
        <h1>Iam Counter</h1>
        <button onClick={hi}>Click Me</button>
        </>
    )
}
export default Counter;