import { describe, expect, test } from 'vitest';
import { Task } from './taskEntity';

describe('Task Entity', () => {
	test('Is instance', () => {
		const task = new Task({
			day: 'Segunda-feira',
			task: 'Ligar',
			hour: '12:00'
		});

		expect(task).toBeInstanceOf(Task);
	});
});
