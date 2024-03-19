import { Task } from '@modules/task/model/taskEntity';
import { CreateTaskDTO } from '@modules/task/dtos/createTaskDTO';
import { ITaskRepository } from '@modules/task/model/taskRepositoryInterface';
import { injectable, inject } from 'tsyringe';

type CreateTaskUseCaseRequest = CreateTaskDTO;
type CreateTaskUseCaseResponse = Promise<Task>;

@injectable()
export class CreateTaskUseCase {
	constructor(
		@inject('TaskRepository')
		private readonly taskRepository: ITaskRepository
	) {}

	async execute({
		day,
		hour,
		task
	}: CreateTaskUseCaseRequest): CreateTaskUseCaseResponse {
		const data = new Task({
			hour,
			task,
			day
		});

		return await this.taskRepository.create(data);
	}
}
