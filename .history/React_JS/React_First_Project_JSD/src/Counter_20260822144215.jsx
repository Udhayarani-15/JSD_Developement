function Counter(){
    let count = 0
    let hi = () =>{
        let count +=1;
        AudioListener()
    }
    return (
        <>
        <h1>Iam Counter</h1>
        <button onClick={hi}>Click Me</button>
        </>
    )
}
export default Counter;