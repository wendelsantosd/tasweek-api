import Joi from '@hapi/joi';
import { CreateTaskDTO } from '@modules/task/dtos/createTaskDTO';
import { Request, Response, NextFunction } from 'express';

const schema = Joi.object<CreateTaskDTO>({
	hour: Joi.string().required(),
	task: Joi.string().required(),
	day: Joi.string().required()
});

export const createTaskValidation = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const { error } = schema.validate(request.body);

	const message = error?.details[0].message;

	if (error) return response.status(400).json({ message });

	next();
};
