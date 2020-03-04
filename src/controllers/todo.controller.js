var models = require('../models').todo;
var com_models = require('../models').comment;

const postTodo = (req, res, next) => {

  const body = req.body;

    models.create({
      title: body.title,
      description: body.description,
      tags: JSON.stringify(body.tags),
    }).then((todo) => {
      todo.tags = JSON.parse(todo.tags);
      return res.status(200).json(todo);
    });
  
}

const getTodos = async (req, res, next) => {
  try {
    await models.findAll()
    .then((todo) =>{
      console.log(todo.length)
      for( var i = 0; i < todo.length; i++){
        todo[i].tags = JSON.parse(todo[i].tags);
        
      }

      return res.status(200).json(todo);
    })

    
  } catch (e) {
    next(e)
  }
}

const updateTodo = async (req, res, next) => {
  try {
    const id = parseInt(req.params.todoId,10);
    const body = req.body;

    await models.update({
      title: body.title,
      description: body.description,
      tags: JSON.stringify(body.tags),
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
    .then((todo) => {
      todo.tags = JSON.parse(todo.tags);
      return res.status(200).json(todo)});
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
      }).then(todo =>{
        if(!todo){
          return res.status(404).json({err:'No User'});
        }
        todo.tags = JSON.parse(todo.tags);
        return res.status(200).json(todo)
      });
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
    .then(()=> {return res.json({msg: 'success'})})
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
    .then((todo) => res.status(200).json(todo));
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
      res.status(200).json(comment)
    });
  }catch(e){
    next(e)
  }
}

const postComment = async(req, res, next) => {
  try{
    const id = parseInt(req.params.todoId,10);
    const body = req.body;

    await com_models.create({
        todoId: id,
        contents: body.contents
        
      }).then((comment) => res.status(200).json(comment));
  } catch(e){
    next(e)
  }
}

const updateComment = async (req, res, next) => {
  try {
    const id = parseInt(req.params.todoId,10);
    const com_id = parseInt(req.params.commentID,10);
    const body = req.body;

    await com_models.update({
      contents: body.contents
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
    .then((comment) => res.status(200).json(comment));
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
    .then(()=> {return res.json({msg: 'success'})})
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