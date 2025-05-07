let tasks = require('../mock/tasks');
const db = require('../database/index');

class TaskRepository{

  async findAll(){
    const  rows   = await db.query(`
      SELECT title, status_task, describe, user_task
      FROM tasks

    `);

    return rows;

  }

  findById(id){

    return new Promise((resolve) => {
      resolve(
        tasks.find((task) => task.id === id)
      )
    })
  }

  async create({
    title,
    status_task,
    describe,
    user_task
  }){

    const row = await db.query(`
      INSERT INTO tasks(title,status_task, describe,user_task)
      VALUES($1, $2, $3, $4)
      RETURNING title, status_task,describe, user_task

      `, [title, status_task, describe, user_task]);

      return row;
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
