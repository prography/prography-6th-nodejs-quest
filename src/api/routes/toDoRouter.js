import express from "express";
import commentRouter from "./commentRouter";

const toDoRouter = express.Router();

toDoRouter.post("/", () => console.log("1"));
toDoRouter.get("/", () => console.log("2"));
toDoRouter.get("/:todoId", () => console.log("3"));
toDoRouter.put("/:todoId", () => console.log("4"));
toDoRouter.put("/:todoId/complete", () => console.log("5"));
toDoRouter.delete("/:todoId", () => console.log("6"));

toDoRouter.use("/:todoId/comments", commentRouter);

export default toDoRouter;
