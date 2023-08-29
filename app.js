const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");

//middleware

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasksRoutes);

const port = 2000;

app.listen(port, console.log(`Server is listening on port ${port}...`));
