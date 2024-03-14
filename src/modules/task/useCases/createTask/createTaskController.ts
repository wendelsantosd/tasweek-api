import { Task } from '@modules/task/models/task';
import { Request, Response } from 'express';

export class CreateTaskController {
	async handle(request: Request, response: Response) {
		const { title, description } = request.body;

		const task = Task.build({ title, description });

		const saved = await task.save();

		return response.status(201).json(saved);
	}
}
