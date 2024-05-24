import { formatDate, getYear } from "date-fns";
import { useState } from "react";
import { AppDispatch } from "../features/store/store";
import { useDispatch } from "react-redux";
import { selectTask } from "../features/slices/taskSlice";
import taskAsyncThunk from "../features/thunks/taskThunk";

const Task = ({ task, setToggle }: { task: any; setToggle: Function }) => {
  const dispatch: AppDispatch = useDispatch();
  const [hover, setHover] = useState(false);
  return (
    <div className="p-2 rounded-lg shadow-sm bg-white relative">
      <span className="flex items-center justify-between gap-2">
        <p className="text-lg mt-1">{task.title}</p>
        <button
          className="text-xl font-semibold"
          onClick={() => {
            dispatch(selectTask(task));
            setToggle(true);
          }}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </span>
      <p className="text-sm my-2">{task.description}</p>
      <p className="text-xs font-semibold bottom-1 left-1 absolute">
        {`${formatDate(task.createdAt, "eeee")}, ${getYear(task.createdAt)}`}
      </p>
      <button
        className="float-right text-lg text-red-400"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => dispatch(taskAsyncThunk.deleteTask({ _id: task._id }))}
      >
        <i
          className={`fa-trash-can ${
            hover ? "fa-solid" : "fa-regular"
          } transition-all duration-700`}
        ></i>
      </button>
    </div>
  );
};

export default Task;
