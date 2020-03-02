import express from "express";
import commentRouter from "./commentRouter";
import { createTodo } from "../controllers/toDoController";

const toDoRouter = express.Router();

toDoRouter.post("/", createTodo);
toDoRouter.get("/", () => console.log("2"));
toDoRouter.get("/:todoId", () => console.log("3"));
toDoRouter.put("/:todoId", () => console.log("4"));
toDoRouter.put("/:todoId/complete", () => console.log("5"));
toDoRouter.delete("/:todoId", () => console.log("6"));

toDoRouter.use("/:todoId/comments", commentRouter);

export default toDoRouter;
