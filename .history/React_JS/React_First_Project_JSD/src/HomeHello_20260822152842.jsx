const Hello =({detail}) =>{
    let {name,role,salary} = {...detail};
    return <div>
        <h1>{name}</h1>
        <h1>{role}</h1>
        <h1>{salary}</h1>
    </div>
}
export default Hello;