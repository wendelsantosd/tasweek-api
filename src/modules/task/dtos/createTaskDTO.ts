export type CreateTaskDTO = {
	hour: string;
	task: string;
	day: Day;
};

type Day = 'Segunda-feira' | 'Terça-feira' | 'Quarta-feira' | 'Quinta-feira' | 'Sexta-feira' | 'Sábado' | 'Domingo';
