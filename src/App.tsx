import './App.css'
import { Person } from "./Person";

let name: string = "";
let age: number = 0; 
let isMarried: boolean = false; 
//let ages: number[] = [1,2,3,4,5];
//let badVariable: any = "you should almost never use the any type"; 

function App() {

  return(
    <Person name={"Damian"} age={25} isMarried={false} />

  );
  
}

export default App
