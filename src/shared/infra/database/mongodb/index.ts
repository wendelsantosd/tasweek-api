import { mongo } from '@shared/config/env/mongo';
import mongoose from 'mongoose';

export const connectMongoDB = () =>
	mongoose
		.connect(mongo.uri)
		.then(() => console.log('Connected to MongoDB'))
		.catch((err) => console.error(err));
