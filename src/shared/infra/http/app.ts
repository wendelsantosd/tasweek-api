import 'dotenv/config';
import { server } from '@shared/config/env/server';
import express from 'express';

export const bootstrapAPI = async () => {
	const app = express();

	app.listen(server.port, () =>
		console.log(`Server is running on port ${server.port}!`)
	);
};
