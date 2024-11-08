import { useState } from "react";
import { UserContext } from "./UserContextProvider";
import { useContext } from "react";

/*
export interface Person{
    name: string;
    age: number;
    isMarried:boolean;
} //type can be used anywhere in project when exported 
 */

interface Props{
    name: string;
    age: number;
    isMarried: boolean;
    country: Countries;
}

export enum Countries {
    UnitedStates = "United States",
    Japan = "Japan",
    France = "France"
}

export const Person = (props: Props)=> {
    const [isShowInfo, setShowInfo] = useState<boolean|null>(false);
    const [bio, setBio] = useState<string | null>("me");
    const {} = useContext(UserContext); //by using the provider and use context you can use ctrl + space to know the time the context can return
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { //OnChange values have special React types that handle input cases
        setBio(event.target.value)
    };

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => { //this is how you would type a form submit

    }

    const toggleInfo = () => {
        setShowInfo((prev) => !prev); //take the value of prev and return the opposite, toggle boolean
    };

    return (
        <div>
            {isShowInfo && (
                <>
                    <p>Name: {props.name} </p>
                    <p>Age: {props.age}</p>
                    <p>Married: {props.isMarried ? "is married" : "is single"}</p>
                </>
             )}
             <p>{props.name}'s Bio: {!bio ? "no bio available" : bio}</p>
             <p> Country of Origin: {props.country}</p>
             <input onChange={handleChange}/>
             <button onClick={toggleInfo}> Toggle </button>
        </div>
    );
};