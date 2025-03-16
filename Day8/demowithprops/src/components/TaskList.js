import { useState,useContext,useEffect } from 'react';
import TaskCard from './TaskCard';
import { TaskContext } from './TaskContext';


export const TaskList = () => {

    const [show, setShow] = useState(true);
       const { tasks }=  useContext(TaskContext)

       useEffect(() => {
        console.log("Updated tasks:", tasks); // Debugging log
    }, [tasks]);
    
   
    return (
        <section className='tasklist'>
            <ul>
                <div className='header'>
                    <h1>TaskList</h1>
                    <button className='trigger' onClick={() => setShow(!show)}>{show ? "Hide Tasks" : "Show Tasks"}</button>
                </div>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task}  />
                ))}
            </ul>
        </section>
    )
}

export default TaskList