const TaskRepository = require('../repositories/TaskRepository')

const validateTaskId = async (req,res, next) => {
  const{ id } = req.params;
  console.log('teste')

  try {
    const task = await TaskRepository.findById(id);
    if (!task){
      return res.status(404).json({
        error: 'Task not found.'
      });

    }
    next();
  } catch (error){
    next(error);
  }

};

module.exports = validateTaskId;
