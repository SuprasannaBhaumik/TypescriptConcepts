export class StaticMemberDemo {

	static TEMPERATURE: number = 25;

	staticUsage = (): void => {
		console.log(StaticMemberDemo.TEMPERATURE);
	}

}

let myClass = new StaticMemberDemo();
myClass.staticUsage();
