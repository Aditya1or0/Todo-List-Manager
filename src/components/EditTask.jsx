import React, { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const { tasks, updateTaskStatus } = useContext(TaskContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((task) => task.id === parseInt(id));

  const [status, setStatus] = useState(task ? task.status : "No status");

  //to update status when task changes
  useEffect(() => {
    if (task) {
      setStatus(task.status);
    }
  }, [task]);

  //this function is to update task status and redirect to home page
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      updateTaskStatus(task.id, status);
      navigate("/");
    }
  };

  //if the task is not found
  if (!task) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-xl text-gray-800">
        Task not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Task</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="status"
          >
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Status
        </button>
      </form>
    </div>
  );
};

export default EditTask;
