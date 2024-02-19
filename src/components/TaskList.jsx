import TaskCard from "./TaskCard";
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {

const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-white capitalize text-4xl text-center">Aun no hay areas</h1>;
  }

  return (
    <div className="grid grid-cols-3 gab-2">
      {tasks.map((task) => (
        <TaskCard  key={task.id} tasks={task}  />
      ))}
    </div>
  );
}

export default TaskList;
