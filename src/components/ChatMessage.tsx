
import { BotIcon, UserIcon } from './icons';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const { author, text, sources } = message;
  const isUser = author === 'user';

  return (
    <div className={`flex items-start gap-4 my-4 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && <BotIcon className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-600 p-1" />}
      <div className={`p-4 rounded-lg max-w-2xl ${isUser ? 'bg-blue-600' : 'bg-gray-700'}`}>
        <p className="whitespace-pre-wrap">{text}</p>
        {sources && sources.length > 0 && (
          <div className="mt-4 border-t border-gray-600 pt-2">
            <h4 className="text-sm font-semibold mb-1">Sources:</h4>
            <ul className="text-xs list-decimal pl-5 space-y-1">
              {sources.map((source, index) => (
                <li key={index} className="truncate">
                  <a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {isUser && <UserIcon className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-600 p-1" />}
    </div>
  );
};
