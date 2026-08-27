const Hello =({detail}) =>{
    let {name1,role1,salary1} = {...detail};
    return <div>
        <h1>{name1}</h1>
        <h1>{role1}</h1>
        <h1>{salary1}</h1>
    </div>
}
export default Hello;