import { CreateTaskDTO } from '@modules/task/dtos/createTaskDTO';
import { ITaskRepository } from '@modules/task/model/taskRepository.interface';
import { ITaskDoc } from '@modules/task/model/taskSchema';
import { injectable, inject } from 'tsyringe';

@injectable()
export class CreateTaskUseCase {
	constructor(
		@inject('TaskRepository')
		private readonly taskRepository: ITaskRepository
	) {}

	async execute(data: CreateTaskDTO): Promise<ITaskDoc> {
		return await this.taskRepository.create(data);
	}
}
