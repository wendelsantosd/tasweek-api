import mongoose from 'mongoose';

interface ITask {
	title: string;
	description: string;
}

interface TaskModelInterface extends mongoose.Model<TaskDoc> {
	build(attr: ITask): TaskDoc;
}

interface TaskDoc extends mongoose.Document {
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

export const Task = mongoose.model<TaskDoc, TaskModelInterface>(
	'Task',
	taskSchema
);
