export const NewTaskForm = ({
  handleSubmit,
  values,
  handleInputChange,
  isEmpty,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex w-full items-start space-x-4">
      <div className="flex-1">
        <input
          type="text"
          name="task"
          id="task"
          value={values.task}
          onChange={handleInputChange}
          className="w-full rounded-lg bg-gray-300 p-3 font-medium text-slate-700 placeholder:text-gray-400 focus:outline-none"
          placeholder="Ej. Get MERN Stack"
        />
        {isEmpty && (
          <span className="text-sm text-red-500 ">Please enter a task</span>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-[128px] rounded-lg bg-sky-500 py-3 font-semibold text-white"
        >
          Add
        </button>
      </div>
    </form>
  );
};
