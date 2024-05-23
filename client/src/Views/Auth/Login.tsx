import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { AppDispatch, RootState } from "../../features/store/store";
import userAsyncThunk from "../../features/thunks/userThunk";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter a valid email")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Minimum of 8 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("Password is Required"),
});

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loadingState, errorCode } = useSelector(
    (state: RootState) => state.user
  );
  const form = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log(values);
      dispatch(userAsyncThunk.login(values)).then(() => {
        setSubmitting(false);
      });
    },
  });

  return (
    <div className="flex flex-wrap py-20 min-h-screen p-6">
      <div className="grow-[99999]"></div>
      <div className="bg-white shadow-md rounded-xl p-4 grow basis-[450px]">
        <h2 className="font-semibold text-2xl text-center mb-8">
          Login to TaskFlow
        </h2>
        {errorCode && (
          <p className="mb-2 text-red-400 text-center text-lg">{errorCode}</p>
        )}
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={form.handleChange}
              className="p-2 rounded-xl border border-gray-300 outline-gray-300 text-sm"
            />
            {form.errors.email && (
              <p className="text-red-500 font-semibold text-sm">
                {form.errors.email}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={form.handleChange}
              className="p-2 rounded-xl border border-gray-300 outline-gray-300 text-sm"
            />
            {form.errors.password && (
              <p className="text-red-500 font-semibold text-sm">
                {form.errors.password}
              </p>
            )}
          </div>
          <button
            className={`w-fit px-8 mt-4 py-2 rounded-lg text-sm font-semibold bg-rose-200 shadow md ${
              form.isSubmitting ? "opacity-80" : ""
            }`}
            disabled={form.isSubmitting}
            onClick={form.submitForm}
          >
            {form.isSubmitting ? "Please Wait..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
