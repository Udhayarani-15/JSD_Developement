import Home from './HomePage';
import Hello from './HomeHello';
import NavBar from './NavBar';
import Counter from './Counter'

function App(){
        let info ={
                name1 : "Yogesh",
                role2 : "JSD",
                salery1 : "20000"
        }
        return (<>
        <NavBar/>
        <Home name={"Udhai"} age={"21"} role={"Software Developer"}/>
        <Hello detail={info}/>
        </>); 
 }
 export default App;