import { createContext, useState } from "react";
import { tasks as data } from "../data/task";
import { useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [tasks, setTask] = useState([]);

  function createTask(task) {
    setTask([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  const handleErases = (taskId) => {
    setTask(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleErases,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
