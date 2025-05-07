const db = require('../database/index');

class TaskRepository{

  async findAll(orderBy = 'ASC'){

    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const  rows   = await db.query(`
      SELECT title, status_task, describe, user_task, id
      FROM tasks
      ORDER BY title ${direction}

    `);

    return rows;

  }

  async findById(id){

    const row = await db.query(`
      SELECT *
      FROM tasks
      WHERE id = $1

    `, [id]);


    return row;
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

  async delete(id){

    const row = await db.query(`
      DELETE
      FROM tasks
      WHERE id = $1

    `, [id]);

    return row;

  }

  async update(id, {
    title, status_task, describe, user_task
  }){

   const row = await db.query(`
    UPDATE tasks
    SET title = $1, status_task = $2, describe = $3, user_task = $4
    WHERE id = $5

    RETURNING *


  `, [title, status_task, describe, user_task, id])
    return row;
  }

}

module.exports = new TaskRepository();
