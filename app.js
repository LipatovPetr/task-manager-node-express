const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");
const connectDB = require("./db/connect");
const { connect } = require("mongoose");
require("dotenv").config();
const notFound = require("./middleware/not-found");

//middleware

app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasksRoutes);
app.use(notFound);

const port = 2000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
