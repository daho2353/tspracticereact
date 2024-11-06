import { createContext, useEffect, useState } from "react";

export interface User{ //creates global type User
    name: string;
    age: number;
    isMarried:boolean;
}

interface UserContextType { //sets the initial types for UserContext
    users: User[] | null;
    addUser: (user: User) => void;
    deleteUser: (id: string) => void;
    updateUser: (id: string) => void;
}

const contextInitialValues = { //sets the initial values for User contexts
    users: null,
    addUser: () => null,
    deleteUser: () => null,
    updateUser: () => null
}

export const UserContext = createContext<UserContextType>(contextInitialValues); //creates a global UserContext which allows you to templatize any users with value and type in other components. See Person.tsx for use case

//how to access the children of props
interface Props {
    children: React.ReactNode;
}


export const UserProvider = (props: Props) => { //Provider function which sets the initial state of the User and functions and returns the child results and potential values
    const [users, setUsers] = useState<User[] | null>(null) 

    useEffect( () => {
        setUsers([{name:"Damian", age: 25, isMarried:false}]) //rather than filler information here it would instead probably be something like information from an API but filler info is added for sake of tutorial
    },[]);

    const addUser = (user:User) => null;
    const updateUser = (id:string) => null;
    const deleteUser = (id:string) => null;

    return <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}> {props.children} </UserContext.Provider>; //props.children allows userProvider to wrap other components and share UserContext values with them. value prop is what .Provider makes accessible to any child component that subscribes to the context.
};