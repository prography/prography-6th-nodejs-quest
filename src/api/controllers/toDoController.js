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
  try {
    const todos = await Todo.find({});
    res
      .status(200)
      .json(todos)
      .end();
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async (req, res) => {
  const {
    params: { todoId }
  } = req;
  try {
    const todo = await Todo.findById({ _id: todoId });
    res
      .status(200)
      .json(todo)
      .end();
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  const {
    params: { todoId },
    body: { title }
  } = req;
  console.log(todoId);
  console.log(title);
  try {
    const updateTodo = await Todo.findOneAndUpdate(
      { _id: todoId },
      { title: title },
      {
        new: true
      }
    );
    res
      .status(200)
      .json(updateTodo)
      .end();
  } catch (error) {
    console.log(error);
  }
};
