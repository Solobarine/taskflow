import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store/store";
import taskAsyncThunk from "../../features/thunks/taskThunk";
import { useEffect } from "react";
import { taskUpdate } from "../../features/slices/taskSlice";

const taskSchema = Yup.object().shape({
  _id: Yup.string().required("ID is Required"),
  title: Yup.string()
    .min(4, "Minimum of 4 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("Title is Required"),
  description: Yup.string().max(100, "Maximum of 100 Characters").notRequired(),
});

const Update = ({ setToggleState }: { setToggleState: Function }) => {
  const dispatch: AppDispatch = useDispatch();
  const { task } = useSelector((state: RootState) => state.task);
  const form = useFormik({
    initialValues: task,
    validationSchema: taskSchema,
    onSubmit(values, { setSubmitting }) {
      setSubmitting(true);
      dispatch(taskAsyncThunk.updateTask(values)).then(() => {
        setSubmitting(false);
        setToggleState(false);
      });
      dispatch(taskUpdate({ payload: form.values }));
    },
  });

  useEffect(() => {
    form.setValues((values: any) => ({ ...values, ...task }));
  }, [task]);
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full max-w-sm bg-white p-3 rounded-lg z-50">
      <div className="flex items-center gap-3 justify-between">
        <h3 className="font-semibold text-lg">Create a Task</h3>
        <button
          className="text-red-500 transition-all duration-700 hover:bg-red-500 hover:text-white px-3 py-1 rounded-lg"
          onClick={() => setToggleState(false)}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      <form
        action="patch"
        className="p-3 grid gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          form.submitForm();
        }}
      >
        <div className="grid gap-1">
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Task Title"
            className="p-2 rounded-lg outline-gray-300 border border-gray-300"
            onChange={form.handleChange}
            value={form.values.title}
          />
          {form.errors.title && (
            <p className="text-red-400 font-semibold text-sm">
              {form.errors.title as string}
            </p>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter Task Description"
            className="p-2 rounded-lg outline-gray-300 border border-gray-300"
            onChange={form.handleChange}
            value={form.values.description}
          />
          {form.errors.description && (
            <p className="text-red-400 font-semibold text-sm">
              {form.errors.description as string}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={`px-3 p-2 rounded-lg border-gray-300 bg-cyan-100 text-sm font-semibold shadow-md ${
            form.isSubmitting ? "opacity-80" : ""
          }`}
          disabled={form.isSubmitting}
          onClick={form.submitForm}
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default Update;
