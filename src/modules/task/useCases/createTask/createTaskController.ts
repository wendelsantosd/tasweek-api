import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTaskUseCase } from './createTaskUseCase';

export class CreateTaskController {
	async handle(request: Request, response: Response) {
		const { hour, task, day } = request.body;

		const createTaskUseCase = container.resolve(CreateTaskUseCase);

		const taskCreated = await createTaskUseCase.execute({
			hour,
			task,
			day
		});

		return response.status(201).json({
			message: 'Tarefa criada com sucesso!',
			task: taskCreated
		});
	}
}
