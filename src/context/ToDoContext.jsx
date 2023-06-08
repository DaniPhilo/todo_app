import { createContext, useState } from "react"

export const ToDoContext = createContext();

const ToDoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    return (
        <ToDoContext.Provider value={{ todos, setTodos }}>
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoContextProvider