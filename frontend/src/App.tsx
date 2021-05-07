import React from 'react';
import { Main } from './main';
import {Task, TaskContext} from './store/tasks/index';
function App() {
  //const task1 = new Task("Estudar React", false);
  //const task2 = new Task('Correr 5km', false);
  const tasks = [
    {
      id: 1,
      description: "Estudar React",
      done: false,
    },
    {
      id: 2,
      description: "Correr 5km",
      done: false,
    }
  ]
  const [taskList, setTaskList] = React.useState<Task[]>(tasks);

  return (
    <TaskContext.Provider value={{taskList, setTaskList}}>
      <Main />
    </TaskContext.Provider>
  );
}

export default App;
