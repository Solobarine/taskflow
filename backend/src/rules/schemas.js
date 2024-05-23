const Yup = require("yup");

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(20),
});

const registerSchema = Yup.object().shape({
  name: Yup.string().min(4).max(20),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(20),
});

const createTaskSchema = Yup.object().shape({
  title: Yup.string().min(4).max(20).required(),
  description: Yup.string().notRequired(),
});

module.exports = { loginSchema, registerSchema, createTaskSchema };
