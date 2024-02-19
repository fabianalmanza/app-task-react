import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ tasks }) {
  const { handleErases } = useContext(TaskContext);

  return (
    <div className="bg-gray-950 text-white p-4 rounded-md m-1">
      <h1
        className="text-xl font-bold capitalize"
      >
        {tasks.title}
      </h1>
      <p className="text-gray-500">{tasks.description}</p>
      <button className="bg-red-500 px-2 py-1 mt-4 rounded-md hover:bg-red-400" onClick={() => handleErases(tasks.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
