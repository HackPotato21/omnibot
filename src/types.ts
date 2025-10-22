
export interface Message {
  id: string;
  author: 'user' | 'ai';
  text: string;
  sources?: Source[];
}

export interface Source {
  uri: string;
  title: string;
}
