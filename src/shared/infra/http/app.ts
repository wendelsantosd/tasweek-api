import 'dotenv/config';
import express from 'express';
import { server } from '../../config/env/server';

export const bootstrapAPI = async () => {
	const app = express();

	app.listen(server.port, () =>
		console.log(`Server is running on port ${server.port}!`)
	);
};
