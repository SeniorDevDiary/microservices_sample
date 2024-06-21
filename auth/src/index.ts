import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Auth v123");
});

app.post("/login", (req, res) => {
  res.send("Login");
});

app.post("/register", (req, res) => {
  res.send("Register");
});

app.listen(PORT, () => {
  console.log(`Auth Service is running on port ${PORT}`);
});
