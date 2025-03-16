import { createContext, useState } from "react";

//create a context

export const TaskContext = createContext();

// provider component

export const TaskProvider = ({ children }) => {
    
    const [tasks, setTasks] = useState([
        { id: 5271, name: "Record React Lectures", completed: true },
        { id: 7825, name: "Edit React Lectures", completed: false },
        { id: 8391, name: "Watch Lectures", completed: false }
      ]);
    
    // function to add a new task
    const addTask = (task) =>
    {
        setTasks([...tasks, task]);
    }

    // funtion to delete a task

    const deleteTask = (id) =>
    {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (

        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )

}