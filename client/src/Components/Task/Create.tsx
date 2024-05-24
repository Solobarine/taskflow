import { useFormik } from "formik";
import * as Yup from "yup";
import taskAsyncThunk from "../../features/thunks/taskThunk";
import { AppDispatch } from "../../features/store/store";
import { useDispatch } from "react-redux";

const taskSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, "Minimum of 4 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("Title is Required"),
  description: Yup.string().max(100, "Maximum of 100 Characters").notRequired(),
});

const Create = () => {
  const dispatch: AppDispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: taskSchema,
    onSubmit(values, { setSubmitting }) {
      setSubmitting(true);
      dispatch(taskAsyncThunk.createTask(values)).then(() => {
        setSubmitting(false);
      });
    },
  });

  return (
    <div className="bg-white p-3 rounded-lg mb-2">
      <h3 className="font-semibold text-lg">Create a Task</h3>
      <form
        action="post"
        className="p-3 grid gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          form.submitForm();
        }}
      >
        <div className="responsive-grid gap-3 items-start">
          <div className="grid gap-1">
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter Task Title"
              onChange={form.handleChange}
              className="p-2 rounded-lg outline-gray-300 border border-gray-300"
            />
            {form.errors.title && (
              <p className="text-red-400 font-semibold text-sm">
                {form.errors.title}
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
              onChange={form.handleChange}
              className="p-2 rounded-lg outline-gray-300 border border-gray-300"
            />
            {form.errors.description && (
              <p className="text-red-400 font-semibold text-sm">
                {form.errors.description}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className={`px-3 p-1 rounded-lg border-gray-300 bg-cyan-100 text-sm font-semibold shadow-md sm:w-fit ${
            form.isSubmitting ? "opacity-80" : ""
          }`}
          disabled={form.isSubmitting}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Create;
