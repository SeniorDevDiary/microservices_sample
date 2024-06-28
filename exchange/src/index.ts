import express from "express";
import { sendMessage } from "./AMQP";

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get("/rate", (req, res) => {
  sendMessage("Check rate: " + new Date().toISOString());

  res.send("Get exchange rate");
});

app.post("/convert", (req, res) => {
  sendMessage("Convert: " + new Date().toISOString());

  res.send("convert currency ");
});

app.listen(PORT, () => {
  console.log(`Exchange Service is running on port ${PORT}`);
});
