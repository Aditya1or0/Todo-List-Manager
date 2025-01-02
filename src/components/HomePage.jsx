import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { tasks, loading } = useContext(TaskContext);

  //if tasks are loading
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading tasks...
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Task List</h1>
        <Link
          to="/add"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Add New Task
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-1">
                {task.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {task.description}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium mb-2">
                Status:{" "}
                <span
                  className={`${
                    task.status === "Complete"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {task.status}
                </span>
              </p>
              <Link
                to={`/edit/${task.id}`}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded text-xs transition duration-300 ease-in-out inline-block"
              >
                Edit Status
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
