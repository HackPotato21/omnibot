
export type MessageAuthor = 'user' | 'ai';

export interface Source {
  uri: string;
  title: string;
}

export interface ChatMessage {
  id: string;
  author: MessageAuthor;
  text: string;
  sources?: Source[];
}
