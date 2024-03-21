import { DayEnum, Task } from '@modules/task/model/taskEntity';
import { CreateTaskDTO } from '@modules/task/dtos/createTaskDTO';
import { ITaskRepository } from '@modules/task/model/taskRepositoryInterface';
import { injectable, inject } from 'tsyringe';
import { AppError } from '@shared/errors/appError';

type CreateTaskUseCaseRequest = CreateTaskDTO;
type CreateTaskUseCaseResponse = Task;

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
	}: CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseResponse> {
		if (!DayEnum[day])
			throw new AppError(
				`Insira um dia válido: ${JSON.stringify(Object.values(DayEnum))}`
			);

		const data = new Task({
			hour,
			task,
			day
		});

		return await this.taskRepository.create(data);
	}
}
