import mongoose from 'mongoose';

interface ITask {
	hour: string;
	task: string;
	day: string;
}

interface ITaskModel extends mongoose.Model<ITaskDoc> {
	build(attr: ITask): ITaskDoc;
}

export interface ITaskDoc extends mongoose.Document {
	hour: string;
	task: string;
	day: string;
}

const taskSchema = new mongoose.Schema({
	hour: {
		type: String,
		require: true
	},
	task: {
		type: String,
		require: true
	},
	day: {
		type: String,
		require: true
	}
});

taskSchema.statics.build = (attr: ITask) => new TaskModel(attr);

export const TaskModel = mongoose.model<ITaskDoc, ITaskModel>('Task', taskSchema);
