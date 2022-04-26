export const ToDoList = ({ tasks, handleCheck, deleteTask }) => {
  return (
    <ul className="list-reset flex flex-col space-y-4 divide-y-2 divide-gray-300">
      {tasks.map((task, index) => (
        <li key={index} className="flex items-center pt-4">
          <div className="flex w-full items-center space-x-4">
            <div
              onClick={() => handleCheck(index)}
              className="flex flex-1 cursor-pointer items-center space-x-2 text-lg font-medium text-slate-700"
            >
              <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border-2 border-gray-300 bg-white text-sky-500">
                {task.done && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <div>
                <p className={task.done ? "line-through" : ""}>{task.name}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => deleteTask(index)}
                type="button"
                className="w-[128px] rounded-lg bg-black py-3 font-semibold text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
