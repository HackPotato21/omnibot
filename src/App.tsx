
import { useState, useCallback, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { generateResponse } from './services/geminiService';
import { Message } from './types';

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      author: 'user',
      text,
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const { text: aiText, sources } = await generateResponse(text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        author: 'ai',
        text: aiText,
        sources,
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessageText = error instanceof Error ? error.message : 'Ugh, something went wrong. This is so cheugy.';
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        author: 'ai',
        text: errorMessageText,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans">
      <Header />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 && !isLoading ? (
            <div className="text-center text-gray-400 mt-8">
              <h1 className="text-3xl font-bold mb-2">OmniBot</h1>
              <p>Sup. Ask me whatever. I guess. 🙄</p>
            </div>
          ) : (
            messages.map(msg => <ChatMessage key={msg.id} message={msg} />)
          )}
          {isLoading && (
              <div className="flex items-start gap-4 my-4">
                <div className="p-4 rounded-lg max-w-2xl bg-gray-700">
                    <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400"></div>
                        <span className="ml-2">Judging your prompt...</span>
                    </div>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>
      <footer className="p-4 md:p-6 border-t border-gray-700 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <ChatInput onSend={handleSend} isLoading={isLoading} />
        </div>
        <div className="text-center text-xs text-gray-500 mt-4 flex justify-center items-center gap-4">
          <a href="https://www.instagram.com/with._.hacker/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            Made By with._.hacker
          </a>
          <span className="text-gray-600">|</span>
          <span>Powered By TexZo Database</span>
        </div>
      </footer>
    </div>
  );
};
