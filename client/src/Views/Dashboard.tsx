import { useDispatch, useSelector } from "react-redux";
import Task from "../Components/Task";
import { AppDispatch, RootState } from "../features/store/store";
import { useEffect, useState } from "react";
import taskAsyncThunk from "../features/thunks/taskThunk";
import Create from "../Components/Task/Create";
import Update from "../Components/Task/Update";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.task);
  const { data } = tasks;
  const [toggleCreateTask, setToggleCreateTask] = useState(false);
  const [toggleUpdateForm, setToggleUpdateForm] = useState(false);

  useEffect(() => {
    dispatch(taskAsyncThunk.getTasks());
  }, [dispatch]);

  return (
    <div className="relative flex flex-wrap gap-4 p-4">
      <ToastContainer />
      <div className="grow-[9999] h-full">
        <div className="flex items-center gap-3 flex-wrap justify-between mb-4">
          <p className="font-semibold text-2xl">Tasks</p>
          <button
            className="px-5 py-2 flex items-center gap-1 text-sm font-semibold` rounded-full text-white bg-cyan-400"
            onClick={() => setToggleCreateTask(!toggleCreateTask)}
          >
            {toggleCreateTask ? (
              <>
                <i className="fa-solid fa-xmark"></i>Hide
              </>
            ) : (
              <>
                <i className="fa-solid fa-plus"></i>New Task
              </>
            )}
          </button>
        </div>
        {toggleCreateTask && <Create />}
        <div className="grid gap-3">
          {data.length > 0 ? (
            data.map((task, index) => (
              <>
                <Task key={index} task={task} setToggle={setToggleUpdateForm} />
                <div
                  className={`absolute inset-0 transition duration-700 ${
                    toggleUpdateForm ? "scale-100" : "scale-0"
                  }`}
                >
                  <div
                    id="overlay"
                    className="absolute inset-0 bg-gray-600/60"
                  />
                  <Update setToggleState={setToggleUpdateForm} />
                </div>
              </>
            ))
          ) : (
            <div className="py-24 bg-white/70 text-center font-semibold text-xl rounded-lg">
              No Tasks Avaliale now. Create One
            </div>
          )}
        </div>
      </div>
      <div
        className={`grow basis-72 relative ${
          toggleUpdateForm ? "scale-0" : "scale-100"
        }`}
      >
        <img
          src="/bg1.png"
          alt=""
          className="sticky top-24 rounded-lg hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Dashboard;
