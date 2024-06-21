import express from "express";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Get all todos v22233");
});

app.post("/", (req, res) => {
  res.send("Create a new todo");
});

app.listen(PORT, () => {
  console.log(`Auth Service is running on port ${PORT}`);
});
