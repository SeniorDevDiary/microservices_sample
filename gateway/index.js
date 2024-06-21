const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h2> It's works <3 v2 </h2>`);
});

app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://auth:3001",
    changeOrigin: true,
    pathRewrite: {
      "^/auth": "",
    },
  })
);

app.use(
  "/todos",
  createProxyMiddleware({
    target: "http://todo:3002",
    changeOrigin: true,
    pathRewrite: {
      "^/todos": "",
    },
  })
);

app.use(
  "/exchange",
  createProxyMiddleware({
    target: "http://exchange:3003",
    changeOrigin: true,
    pathRewrite: {
      "^/exchange": "",
    },
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
