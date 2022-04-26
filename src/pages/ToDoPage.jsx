import { EmptyTasks } from "components/to-do/EmptyTasks";
import { NewTaskForm } from "components/to-do/NewTaskForm";
import { ToDoList } from "components/to-do/ToDoList";
import { PageTitle } from "components/ui/PageTitle";
import { useForm } from "hooks/useForm";
import { useEffect } from "react";
import { useState } from "react";

const initialValues = {
  task: "",
};

export const ToDoPage = () => {
  const { values, handleInputChange, resetForm } = useForm(initialValues);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localTasks = localStorage.getItem("tasks");
    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: values.task,
      done: false,
    };
    setTasks([newTask, ...tasks]);
    localStorage.setItem("tasks", JSON.stringify([newTask, ...tasks]));
    resetForm();
  };

  const handleCheck = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="Lista de tareas" />
      <section className="mt-8 flex w-full justify-center">
        <div className="w-3/4">
          <NewTaskForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            values={values}
          />
          <div className="mt-12">
            <ToDoList
              tasks={tasks}
              handleCheck={handleCheck}
              deleteTask={deleteTask}
            />

            {tasks.length === 0 && <EmptyTasks />}
          </div>
        </div>
      </section>
    </div>
  );
};
