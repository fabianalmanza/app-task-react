import { useContext, useState } from "react";
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask} = useContext(TaskContext);



  const handleSubmit = (e) => {
    e.preventDefault();
   
    createTask({
        title,
        description})
        setTitle("")
        setDescription("")
      };

  return (
    <div className="max-w-md mx-auto py-4 ">

    <form className="bg-gray-950 p-10 mb-4 rounded-md" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold capitalize text-center text-white py-3">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2 rounded-md"
      />
        <h1 className="text-xl font-bold capitalize text-center text-white py-3">Descripción de la tarea</h1>
      <textarea 
        className="bg-slate-300 p-3 w-full mb-2 rounded-md"

      placeholder="Escribe la descripcion de tu tarea"
      onChange={e => setDescription(e.target.value)}
      value={description}
      ></textarea>
      <button 
        className="bg-green-500 px-2 py-1 mt-4 rounded-md hover:bg-green-300 text-white"
      >Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
