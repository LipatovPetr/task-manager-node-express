const mongoose = require("mongoose");

const connectiontring =
  "mongodb+srv://lipatov:Zinzin2021@cluster0.ub3t9n9.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectiontring, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
