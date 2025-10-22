// Fix: Provide a complete implementation for the ChatInput component.
import React, { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { SendIcon } from './icons.tsx';

interface ChatInputProps {
  onSend: (text: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, isLoading }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (text.trim() && !isLoading) {
      onSend(text);
      setText('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className="flex items-end bg-gray-800 rounded-lg p-2">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your message..."
        rows={1}
        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none max-h-40"
        disabled={isLoading}
      />
      <button
        onClick={handleSend}
        disabled={isLoading || !text.trim()}
        className="ml-2 p-2 rounded-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors flex-shrink-0"
        aria-label="Send message"
      >
        <SendIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ChatInput;