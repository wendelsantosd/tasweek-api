import { Router } from 'express';
import { CreateTaskController } from '@modules/task/useCases/createTask/createTaskController';

export const taskRouter = Router();

const createTaskController = new CreateTaskController();

taskRouter.post('', createTaskController.handle);
