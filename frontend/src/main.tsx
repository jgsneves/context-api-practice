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
        const newArr = context.taskList;
        newArr.push(newTaskObject);

        context.setTaskList(newArr);

        console.log(context);
    }
    function handleDeleteButtonClick(arr: Task[], taskId: number) {
        const newArr = arr.filter(item => item.id !== taskId);
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
                        <p>Concluída: {task.done}</p>
                        <button>Editar</button>
                        <button onClick={() => handleDeleteButtonClick(context.taskList, task.id)}>Apagar</button>
                    </li>
                ))}
            </ul>
        </>
    );
}