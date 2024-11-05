export interface Person{
    name: string;
    age: number;
    isMarried:boolean;
} //type can be used anywhere in project when exported 
 
export const Person = (props: Person)=> {
    return (
        <div> 
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
            <p>Married: {props.isMarried ? "is married" : "is single"}</p>
            
        </div>
    );
};