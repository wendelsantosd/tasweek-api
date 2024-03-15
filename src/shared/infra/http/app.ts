import 'dotenv/config';
import 'express-async-errors';
import express, { json, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { server } from '@shared/config/env/server';
import { taskRouter } from '../routes/task.routes';
import { connectMongoDB } from '../database/mongodb';
import { AppError } from '@shared/errors/appError';

export const bootstrapAPI = async () => {
	const app = express();
	app.use(cors());
	app.use(json());
	app.use(taskRouter);
	app.use(
		(
			error: Error,
			request: Request,
			response: Response,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			next: NextFunction
		) => {
			if (error instanceof AppError)
				return response.status(error.statusCode).json({
					message: error.message
				});

			return response.status(500).json({
				message: `Internal Server Error: ${error.message}`
			});
		}
	);

	connectMongoDB();

	app.listen(server.port, () =>
		console.log(`Server is running on port ${server.port}!`)
	);
};
