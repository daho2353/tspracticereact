import './App.css'
import { Person, Countries } from "./Person";
import { UserProvider } from './UserContextProvider';

let name: string = "";
let age: number = 0; 
let isMarried: boolean = false; 
//let ages: number[] = [1,2,3,4,5];
//let badVariable: any = "you should almost never use the any type"; 

function App() {

  return(
    <UserProvider>
      <Person name={"Damian"} age={25} isMarried={false} country={Countries.Japan}/>
    </UserProvider>

  );
  
}

export default App
