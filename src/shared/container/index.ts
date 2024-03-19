import { TaskRepository } from '@modules/task/infra/mongoose/repository/taskRepository';
import { ITaskRepository } from '@modules/task/model/taskRepositoryInterface';
import { container } from 'tsyringe';

container.registerSingleton<ITaskRepository>('TaskRepository', TaskRepository);
