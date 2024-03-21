export type TaskProps = {
	hour: string;
	task: string;
	day: DayEnum;
};

export enum DayEnum {
  'Domingo' = 'Domingo',
	'Segunda-feira' = 'Segunda-feira',
	'Terça-feira' = 'Terça-feira',
	'Quarta-feira' = 'Quarta-feira',
  'Quinta-feira' = 'Quinta-feira',
  'Sexta-feira' = 'Sexta-feira',
  'Sábado' = 'Sábado',
}

export class Task {
	private props: TaskProps;

	constructor(props: TaskProps) {
		this.props = props;
	}

	get hour(): string {
		return this.props.hour;
	}

	get task(): string {
		return this.props.task;
	}

	get day(): DayEnum {
		return this.props.day;
	}
}
