import React, { createContext } from 'react';

export interface Task {
    id: number;
    description: string;
    done: boolean;
}

export type TaskContextType = {
    taskList: Task[];
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);