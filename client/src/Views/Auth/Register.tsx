import { useFormik } from "formik";
import * as Yup from "yup";
import { AppDispatch } from "../../features/store/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store/store";
import userAsyncThunk from "../../features/thunks/userThunk";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name should be at minimum 2 Characters Long")
    .max(30, "Name too Long")
    .required("Name is Required"),
  email: Yup.string()
    .email("Please Enter a valid email")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Minimum of 8 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("Password is Required"),
});

const Register = () => {
  const dispatch: AppDispatch = useDispatch();
  const { errorCode } = useSelector((state: RootState) => state.user);

  const form = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: registerSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(true);
      dispatch(userAsyncThunk.register(values)).then(() => {
        setSubmitting(false);
      });
    },
  });

  return (
    <div className="flex flex-wrap py-20 min-h-screen p-6">
      <div className="grow-[99999]">
        <img src="/bg3.png" alt="" className="w-full" />
      </div>
      <div className="bg-white shadow-md rounded-xl p-4 grow basis-[450px]">
        <h2 className="font-semibold text-2xl text-center mb-2">
          Welcome to TaskFlow
        </h2>
        <p className="text-xs text-gray-500 text-center mb-8">
          Create an Account
        </p>
        {errorCode && (
          <p className="mb-2 text-red-400 text-lg text-center">{errorCode}</p>
        )}
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="email">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={form.handleChange}
              className="p-2 rounded-xl border border-gray-300 outline-gray-300 text-sm"
            />
            {form.errors.name && (
              <p className="text-red-500 font-semibold text-sm">
                {form.errors.name}
              </p>
            )}
          </div>
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
            className={`w-fit px-8 mt-4 py-2 rounded-lg text-sm font-semibold bg-cyan-200 shadow md ${
              form.isSubmitting ? "opacity-80" : ""
            }`}
            disabled={form.isSubmitting}
            onClick={form.submitForm}
          >
            {form.isSubmitting ? "Please Wait..." : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
