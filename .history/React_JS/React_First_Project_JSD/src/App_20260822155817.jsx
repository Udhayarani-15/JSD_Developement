import Home from './HomePage';
import Hello from './HomeHello';
import NavBar from './NavBar';
import Counter from './Counter';
import Name from './Name';

function App(){
        let info ={
                name : "Yogesh",
                role : "JSD",
                salary : "20000",
        };
        return (<>
        <NavBar/>
        <Home name={"Udhai"} age={"21"} role={"Software Developer"}/>
        <Hello detail={info}/>
        <Counter/><br/>
        <Name/>
        </>); 
 }
 export default App;