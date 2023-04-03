import { Configuration, OpenAIApi, ChatCompletionRequestMessage, CreateChatCompletionRequest } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openAi = new OpenAIApi(configuration);

type CreateChatCompletionRequestOptions = Omit<Omit<CreateChatCompletionRequest, 'messages'>, 'models'>;
type CreateChatCompletionModel = 'gpt-3.5-turbo' | 'gpt-3.5-turbo-0301'
export {ChatCompletionRequestMessage}
export const createChatInterface = (model: CreateChatCompletionModel = 'gpt-3.5-turbo', options?: CreateChatCompletionRequestOptions) => async (messages: ChatCompletionRequestMessage[]) => {
	const response = await openAi.createChatCompletion({model, messages, ...options});
	return response.data;
}
