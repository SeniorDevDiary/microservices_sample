import express from "express";
import { receivedMessages } from "./AMQP";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Get all todos");
});

app.get("/receivedMessages", (req, res) => {
  res.status(200).json({ receivedMessages });
});

app.post("/", (req, res) => {
  res.send("Create a new todo");
});

app.listen(PORT, () => {
  console.log(`Todo Service is running on port ${PORT}`);
});
