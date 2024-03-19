export type TaskProps = {
	hour: string;
	task: string;
	day: DayProps;
};

export type DayProps =
	| 'Segunda-feira'
	| 'Terça-feira'
	| 'Quarta-feira'
	| 'Quinta-feira'
	| 'Sexta-feira'
	| 'Sábado'
	| 'Domingo';

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

	get day(): string {
		return this.props.day;
	}
}
