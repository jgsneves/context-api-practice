import React from 'react';
import { Task, TaskContext } from './store/tasks';

export const Main = () => {
    const context = React.useContext(TaskContext);
    let inputValue = "";

    function createNewTask() {
        const newTaskObject: Task = {
            id: Math.random(),
            description: inputValue,
            done: false,
        }
        const newArr = [...context.taskList, newTaskObject];

        context.setTaskList(newArr);
    }

    function changeDone(taskId: number) {
        const taskIndex = context.taskList.findIndex(item => item.id === taskId);
        //incomplete
    }

    function handleDeleteButtonClick(taskId: number) {
        const newArr = context.taskList.filter(item => item.id !== taskId);
        context.setTaskList(newArr);
    }

    return (
        <>
            <h1>To do list</h1>
            <input 
                type="text" 
                placeholder="Escreva uma nova tarefa"
                onChange={(e) => inputValue = e.target.value}
            />
            <button onClick={createNewTask}>Criar!</button>
            <ul>
                {context.taskList.map(task => (
                    <li key={task.id}>
                        <p>{task.description}</p>
                        <p>Concluída: {String(task.done)}</p>
                        <button onClick={() => changeDone(task.id)}>{task.done ? 'A fazer' : 'Feita'}</button>
                        <button onClick={() => handleDeleteButtonClick(task.id)}>Apagar</button>
                    </li>
                ))}
            </ul>
        </>
    );
}