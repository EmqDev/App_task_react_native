import { Router } from "express";
import { deleteTask, getTaskId, getTasks, getTasksCount, saveTask, updateTask } from "../controllers/tasks";

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 *  
 */



/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: obtiene todas las tareas
 *      tags: [Tasks]
 */
router.get('/task',getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: obtiene la cantidad total de tareas
 *      tags: [Tasks]
 */
router.get('/task/count',getTasksCount)

/**
 * @swagger
 * /tasks/id:
 *  get:
 *      summary: obtiene la tarea que se busca por id
 *      tags: [Tasks]
 */
router.get('/task/:id',getTaskId)

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: crea una nueva tarea 
 *      tags: [Tasks]
 */
router.post('/task',saveTask)

/**
 * @swagger
 * /tasks/id:
 *  delete:
 *      summary: borra una tarea por id
 *      tags: [Tasks]
 */
router.delete('/task/:id',deleteTask)

/**
 * @swagger
 * /tasks/id:
 *  put:
 *      summary: modifica una tarea por id
 *      tags: [Tasks]
 */
router.put('/task/:id',updateTask)


export default router



