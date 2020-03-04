var models = require('../models').todo;
var com_models = require('../models').comment;

const postTodo = (req, res, next) => {

  const name = req.body;

    models.create({
      title: name.title,
      description: name.description,
    }).then((todo) => res.status(201).json(todo));
  
}

const getTodos = async (req, res, next) => {
  try {
    const users = await models.findAll();

    return res.json(users);
  } catch (e) {
    next(e)
  }
}

const updateTodo = async (req, res, next) => {
  try {
    const id = parseInt(req.params.todoId,10);
    const name = req.body;

    await models.update({
      title: name.title,
      description: name.description,
    },{
      where: {
        id: id
      }
    })
    .then (() => {
      return models.findOne({
        where: {
          id: id
        }
      });
    })
    .then((todo) => res.status(201).json(todo));
  } catch (e) {
    next(e)
  }
}

const getTodo = async (req, res, next) => {
  const id = parseInt(req.params.todoId,10);
    if (!id){
        return res.status(400).json({err: 'Incorrect id'});
    }
    try{
      models.findOne({
        where: {
          id: id
        }
      }).then(user =>{
        if(!user){
          return res.status(404).json({err:'No User'});
        }
        return res.json(user);
      })
    }catch(e){
      next(e)
    }
  }

const deleteTodo = async (req, res, next) => {
  const id = parseInt(req.params.todoId,10);
  if (!id){
    return res.status(400).json({err: 'Incorrect id'});
  }
  try {
    models.destroy({
      where: {
        id: id
      }
    })
    .then(()=> {return res.json({message: 'success'})})
  } catch (e) {
    next(e)
  }
}

const completeTodo = async (req, res, next) => {
  try {
    const id = parseInt(req.params.todoId,10);

    await models.update({
      isCompleted: 'true'
    },{
      where: {
        id: id
      }
    })
    .then (() => {
      return models.findOne({
        where: {
          id: id
        }
      });
    })
    .then((todo) => res.status(201).json(todo));
  } catch (e) {
    next(e)
  }
}

const getComments = async (req, res, next) => {
  const id = parseInt(req.params.todoId,10);
  if (!id){
    return res.status(400).json({err: 'Incorrect id'});
  }
  try {

    const comment = await com_models.findAll({
      where: 
      { 
        todoId: id 
      }
    }).then(comment => {
        res.status(200).json(comment)});
  } catch (e) {
    next(e)
  }
}

const getComment = async (req, res, next) => {
  const id = parseInt(req.params.todoId,10);
  const com_id = parseInt(req.params.commentID,10);
  
  if (!id){
    return res.status(400).json({err: 'Incorrect id'});
  }
  try{
    com_models.findOne({
      where: {
        todoId: id,
        id: com_id
      }
    }).then(comment =>{
      if(!comment){
        return res.status(404).json({err:'No User'});
      }
      return res.json(comment);
    })
  }catch(e){
    next(e)
  }
}

const postComment = async(req, res, next) => {
  try{
    const id = parseInt(req.params.todoId,10);
    const name = req.body;

    await com_models.create({
        todoId: id,
        contents: name.contents
        
      }).then((comment) => res.status(201).json(comment));
  } catch(e){
    next(e)
  }
}

const updateComment = async (req, res, next) => {
  try {
    const id = parseInt(req.params.todoId,10);
    const com_id = parseInt(req.params.commentID,10);
    const name = req.body;

    await com_models.update({
      contents: name.contents
    },{
      where: {
        todoId: id,
        id: com_id
      }
    })
    .then (() => {
      return com_models.findOne({
        where: {
          todoId: id,
          id: com_id
        }
      });
    })
    .then((comment) => res.status(201).json(comment));
  } catch (e) {
    next(e)
  }
}

const deleteComment = async (req, res, next) => {
  const id = parseInt(req.params.todoId,10);
  const com_id = parseInt(req.params.commentID,10);
  if (!id){
    return res.status(400).json({err: 'Incorrect id'});
  }
  try {
    com_models.destroy({
      where: {
        todoId: id,
        id: com_id
      }
    })
    .then(()=> {return res.json({message: 'success'})})
  } catch (e) {
    next(e)
  }
}

 
  export {
    postTodo,
    getTodos,
    getTodo,
    deleteTodo,
    updateTodo,
    completeTodo,
    getComments,
    postComment,
    getComment,
    updateComment,
    deleteComment
  }