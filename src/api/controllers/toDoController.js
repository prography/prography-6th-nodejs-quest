import Todo from "../../models/Todo";

export const createTodo = async (req, res) => {
  const {
    body: { title, description, tags }
  } = req;

  try {
    const todo = await Todo.create({
      title,
      description,
      tags
    });
    res
      .status(200)
      .json(todo)
      .end();
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = async (req, res) => {
  console.log("hi");
  try {
    const todos = await Todo.find({});
    res
      .status(200)
      .json(todos)
      .end();
  } catch {
    console.log(error);
  }
};
