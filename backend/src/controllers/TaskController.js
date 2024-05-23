const Task = require("../models/Task");

class TaskController {
  async index(req, res) {
    try {
      const tasks = await Task.find({ userId: req.user.id });
      return res.status(200).json({ tasks });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error." });
    }
  }
  async create(req, res) {
    const { title, description } = req.body;
    console.log(req.body);
    console.log(req.user);
    try {
      const task = new Task({ userId: req.user.id, title, description });
      await task.save();
      return res
        .status(201)
        .json({ message: "Task created successfully", task });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error." });
    }
  }
  async update(req, res) {
    try {
      const id = req.params.id;
      const { title, description } = req.body;

      const task = await Task.findById(id);

      if (req.user.id == task.userId) {
        task.updatetitle = title;
        task.description = description;
        await task.save();
        return res
          .status(200)
          .json({ message: "Task updated successfully", task });
      } else {
        return res
          .status(401)
          .json({ message: "Unauthorized. Task not associated with user" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error." });
    }
  }
  async delete(req, res) {
    try {
      const id = req.params.id;
      const task = await Task.findById(id);
      console.log(req.user);
      console.log(task);
      console.log(req.user.id == task.userId ? "true" : "false");
      if (req.user.id == task.userId) {
        await Task.deleteOne({ _id: task._id });
        return res
          .status(200)
          .json({ message: "Task deleted successfully", _id: task._id });
      } else {
        return res
          .status(401)
          .json({ message: "Unauthorized. Task not associated with user" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error." });
    }
  }
}

module.exports = TaskController;
