import 'dotenv/config';
import { server } from '@shared/config/env/server';
import express, { json } from 'express';
import { taskRouter } from '../routes/task.routes';
import cors from 'cors';

export const bootstrapAPI = async () => {
	const app = express();
	app.use(cors());
	app.use(json());
	app.use(taskRouter);

	app.listen(server.port, () =>
		console.log(`Server is running on port ${server.port}!`)
	);
};
