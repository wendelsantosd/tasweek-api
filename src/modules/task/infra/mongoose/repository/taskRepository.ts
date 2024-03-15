import { CreateTaskDTO } from '@modules/task/dtos/createTaskDTO';
import { ITaskRepository } from '@modules/task/model/taskRepository.interface';
import { ITaskDoc, Task } from '@modules/task/model/taskSchema';

export class TaskRepository implements ITaskRepository {
	async create(data: CreateTaskDTO): Promise<ITaskDoc> {
		const builded = Task.build(data);
		const saved = await builded.save();
		return saved;
	}
}
