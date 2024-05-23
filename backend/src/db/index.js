const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sollyverse:sollyverse@cluster0.qj1dtlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

/*mongoose.connect("mongodb://localhost:27017/taskflow", {*/
/*useNewUrlParser: true,*/
/*useUnifiedTopology: true,*/
/*});*/

const db = mongoose.connection;

db.on("error", console.error.bind("Connection Error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
