const TaskRepository = require('../repositories/TaskRepository')

class TaskController{

  async index(req,res){
    const tasks = await TaskRepository.findAll();

    res.json(tasks);
  }

  async store(req, res){

    const {title, status_task, describe, user_task } = req.body;


    if(!title){
      return res.sendStatus(400).json('Title is required.');
    }

    const task = await TaskRepository.create({title,status_task,describe,user_task});

    return res.json(task);

  }

  async update(req, res){

    const { id } = req.params;
    const { title, status_task, describe, user_task} = req.body;

    //const taskExist = await TaskRepository.findById(id);

    if(!title){
      return res.status(404).json({error: 'Title is require.'})

    }

    //if(!taskExist){
      //return res.status(400).json({error: 'Task not exist.'})
    //}

    const task = await TaskRepository.update(id, { title, status_task, describe, user_task});

    res.json(task);

  }

  async delete(req, res){
    const { id } = req.params;

    const taskExist = await TaskRepository.findById(id);

    if(!taskExist){
      return res.status(400).json('Task not exist.')
    }

    await TaskRepository.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new TaskController();
