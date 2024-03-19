import { CreateTaskUseCase } from './createTaskUseCase';
import { TaskRepositoryInMemory } from '@modules/task/model/in-memory/taskRepositoryInMemory';
import { Task } from '@modules/task/model/taskEntity';

let createTaskUseCase: CreateTaskUseCase;
let taskRepositoryInMemory: TaskRepositoryInMemory;

describe('CreateTaskUseCase', () => {
	beforeEach(() => {
		taskRepositoryInMemory = new TaskRepositoryInMemory();
		createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
	});

	it('should be able to create a new task', async () => {
		const task = await createTaskUseCase.execute({
			day: 'Segunda-feira',
			hour: '12:00',
			task: 'Estudar'
		});

		expect(task).toBeInstanceOf(Task);
	});
});
