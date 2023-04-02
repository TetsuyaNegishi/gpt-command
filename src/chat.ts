import * as readline from "readline/promises";

export const chat = async () => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	while(true) {
		const question = await rl.question("Q: ");
		if(question === "exit") {
			rl.close();
			break;
		}
		console.log(`A: ${question}`);
	}
}
