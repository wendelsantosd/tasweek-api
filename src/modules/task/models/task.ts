import mongoose from 'mongoose';

interface ITask {
	title: string;
	description: string;
}

interface ITaskModel extends mongoose.Model<ITaskDoc> {
	build(attr: ITask): ITaskDoc;
}

interface ITaskDoc extends mongoose.Document {
	title: string;
	description: string;
}

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	}
});

taskSchema.statics.build = (attr: ITask) => new Task(attr);

export const Task = mongoose.model<ITaskDoc, ITaskModel>(
	'Task',
	taskSchema
);
