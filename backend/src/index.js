const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/api", userRouter);
app.use("/api/tasks", taskRouter);

const db = mongoose.connection;

db.on("error", console.error.bind("Connection Error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on Port ${process.env.PORT}`);
  });
});
