import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/hello-world", (req, res) => {
  res.send("hello world");
});

export default app;
