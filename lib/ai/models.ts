export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'OpenAI GPT-5',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-claude',
    name: 'Claude Sonnet 3.7',
    description: 'Strong on reasoning',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  },
];
