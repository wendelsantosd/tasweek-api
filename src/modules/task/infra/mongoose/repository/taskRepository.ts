import { Task } from '@modules/task/model/taskEntity';
import { ITaskRepository } from '@modules/task/model/taskRepositoryInterface';
import { TaskModel } from '@modules/task/model/taskSchema';
import { DayProps } from '@modules/task/model/taskEntity';

export class TaskRepository implements ITaskRepository {
	async create(data: Task): Promise<Task> {
		const builded = TaskModel.build({
			hour: data.hour,
			task: data.task,
			day: data.day
		});

		const saved = await builded.save();

		return new Task({
			hour: saved.hour,
			task: saved.task,
			day: saved.day as DayProps
		});
	}
}
