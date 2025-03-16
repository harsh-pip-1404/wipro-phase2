import React, { useState, useEffect } from "react";
import styled from "styled-components";
import socket from "./socket";

const DashboardContainer = styled.div`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    padding: 20px;
    width: 50%;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const TaskDashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        // Listen for task updates from the server
        socket.on("tasks", (updatedTasks) => {
            setTasks(updatedTasks);
        });

        return () => {
            socket.off("tasks"); // Clean up the listener
        };
    }, []);

    const addTask = () => {
        if (newTask.trim() !== "") {
            socket.emit("addTask", newTask);
            setNewTask(""); // Clear input after adding
        }
    };

    const deleteTask = (index) => {
        socket.emit("deleteTask", index);
    };

    return (
        <DashboardContainer>
            <h2>Task Dashboard (Real-time)</h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </DashboardContainer>
    );
};

export default TaskDashboard;
