import * as readline from "readline/promises";
import { ChatCompletionRequestMessage, createChatInterface } from "./openAi";

const chatInterface = createChatInterface()

export const chat = async () => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	const messages: ChatCompletionRequestMessage[] = [];
	while(true) {
		const question = await rl.question("Q: ");
		if(question === "exit") {
			rl.close();
			break;
		}
		const userMessage:ChatCompletionRequestMessage = {role: 'user', content: question}
		const response = await chatInterface([...messages, userMessage]);
		const answer = response.choices[0].message?.content
		if(!answer) {
			console.log("openai api didn't respond")
			continue;
		}
		console.log(`A: ${answer}`);

		messages.push(userMessage)
		messages.push({role: 'assistant', content: answer})
	}
}
