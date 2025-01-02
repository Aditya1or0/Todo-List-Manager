import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  //adding api in env to follow security and best practices
  const apiKey = import.meta.env.VITE_API_KEY;

  //fetching tasks from API and limited it to 15
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiKey}?_limit=15`);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  //update task status
  const updateTaskStatus = async (id, status) => {
    try {
      const response = await axios.put(`${apiKey}/${id}`, { status });

      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? { ...task, status } : task))
      );
    } catch (error) {
      console.log("Error updating task:", error);
    }
  };

  //add new task to API that also consist previous tasks in the array
  const addTask = async (tasks) => {
    try {
      const newTask = { ...tasks, status: "Incomplete" };
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        newTask
      );
      setTasks((prevTask) => [...prevTask, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  const value = {
    tasks,
    loading,
    addTask,
    updateTaskStatus,
  };

  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
