import { Router } from 'express';
import { CreateTaskController } from '@modules/task/useCases/createTask/createTaskController';
import { createTaskValidation } from '@modules/task/useCases/createTask/createTaskValidation';

export const taskRouter = Router();

const createTaskController = new CreateTaskController();

taskRouter.post('', createTaskValidation, createTaskController.handle);
