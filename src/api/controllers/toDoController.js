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
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
  }
};
