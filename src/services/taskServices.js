import { getData, saveData } from "../utils/storage";

const getTasks = () => {
  return getData("tasks");
};

const addTask = (taskData) => {
  const tasks = getData("tasks");

  const newTask = {
    id: Date.now(),
    ...taskData,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveData("tasks", tasks);

  return {
    success: true,
    message: "Task added successfully",
    task: newTask,
  };
};

const deleteTask = (id) => {
  const tasks = getData("tasks");

  const updatedTasks = tasks.filter((task) => task.id !== id);

  saveData("tasks", updatedTasks);

  return {
    success: true,
    message: "Task deleted successfully",
  };
};

const updateTask = (updatedTask) => {
  const tasks = getData("tasks");

  const updatedTasks = tasks.map((task) =>
    task.id === updatedTask.id
      ? {
          ...task,
          ...updatedTask,
        }
      : task,
  );

  saveData("tasks", updatedTasks);

  return {
    success: true,
    message: "Task updated successfully",
    task: updatedTask,
  };
};

const toggleTaskStatus = (id) => {
  const tasks = getData("tasks");

  const updatedTasks = tasks.map((task) =>
    task.id === id
      ? {
          ...task,
          completed: !task.completed,
          status: task.completed ? "Pending" : "Completed",
        }
      : task,
  );

  saveData("tasks", updatedTasks);

  return {
    success: true,
    message: "Task updated",
  };
};

export { getTasks, addTask, deleteTask, updateTask, toggleTaskStatus };
