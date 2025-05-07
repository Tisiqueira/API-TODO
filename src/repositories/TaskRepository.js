let tasks = require('../mock/tasks');

const { v4 } = require('uuid');

class TaskRepository{

  findAll(){
    return new Promise ((resolve) => {
      resolve(tasks)
    });
  }

  findById(id){

    return new Promise((resolve) => {
      resolve(
        tasks.find((task) => task.id === id)
      )
    })
  }

  create({
    title,
    status,
    describe
  }){

    return new Promise ((resolve) => {
      const newTask = {
        id: v4(),
        title,
        status,
        describe
      }

      tasks.push(newTask);

      resolve(newTask);
    })




  }

  delete(id){

    return new Promise((resolve) => {

      tasks = tasks.filter((task) => task.id !== id);

      resolve();


    });

  }

  update(id, {
    title, status, describe
  }){

   return new Promise((resolve) => {


    tasks = tasks.map((task) => task.id === id ? {

      ...task,
      title: title?.trim() ? title : task.title,
      status: status ?? task.status,
      describe: describe ?? task.describe,

      }
      :task
    );

    const updateTasks = tasks.find((task) => task.id === id)

    resolve(updateTasks);

   })

  }

}

module.exports = new TaskRepository();
