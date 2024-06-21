import express from "express";

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get("/rate", (req, res) => {
  res.send("Get exchange rate");
});

app.post("/convert", (req, res) => {
  res.send("Convert currency v2");
});

app.listen(PORT, () => {
  console.log(`Auth Service is running on port ${PORT}`);
});
