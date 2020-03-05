import Todo from '../models/todo';

exports.createTodo = async (req, res, next) => {
  try {
    const todo = new Todo(req.body);
    todo.updatedAt = Date.now();
    const saveResult = await todo.save();
    res.send(saveResult);
  } catch (err) {
    next(err);
  }
};

exports.readTodos = async (req, res, next) => {
  try {
    const findResult = await Todo.find();
    res.send(findResult);
  } catch (err) {
    next(err);
  }
};

exports.readTodo = async (req, res, next) => {
  try {
    const findResult = await Todo.findById(req.params.todoId);
    if (!findResult) {
      next(new Error('No result'));
    } else {
      res.send(findResult);
    }
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    req.body.updatedAt = Date.now();
    const updateResult = await Todo.findByIdAndUpdate(req.params.todoId, req.body);
    const findResult = await Todo.findById(req.params.todoId);
    res.send(findResult);
  } catch (err) {
    next(err);
  }
};

exports.updateTodoToComplete = async (req, res, next) => {
  try {
    req.body.updatedAt = Date.now();
    const updateResult = await Todo.findByIdAndUpdate(req.params.todoId, {isCompleted: true});
    const findResult = await Todo.findById(req.params.todoId);
    res.send(findResult);
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const deleteResult = await Todo.findByIdAndDelete(req.params.todoId);
    if (!deleteResult) {
      next(new Error(`Can't find todo`));
    } else {
      res.send({msg: 'success'});
    }
  } catch (err) {
    next(err);
  }
};


