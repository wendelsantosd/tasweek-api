import { Request, Response } from 'express';

export class CreateTaskController {
	async handle(request: Request, response: Response) {
		return response.status(201).json({ message: 'Hello World!' });
	}
}
