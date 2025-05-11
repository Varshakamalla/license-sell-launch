
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Send } from "lucide-react";

interface ChatMessage {
  isUser: boolean;
  text: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { isUser: false, text: "Hi there! I'm SoftBot, your virtual assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedResponses: Record<string, string> = {
    "how do i sell my license": "To sell your license, just click the 'Sell My Licenses' button on our homepage or use our contact form. Upload your license details, and our team will provide a valuation within 24 hours.",
    "what types of licenses": "We accept licenses from major software vendors including Microsoft, Adobe, Oracle, SAP, Autodesk, VMware, and many others. If you're unsure, please submit your license details and we'll check eligibility.",
    "how long does it take": "Our process is quick! You'll receive a valuation within 24 hours of submission, and once you accept our offer, payment is typically processed within 48-72 hours.",
    "how much can i get": "The value of your license depends on factors like software type, version, remaining term, and market demand. We pride ourselves on offering the best market rates - typically 40-70% of the original license value.",
    "is this legal": "Absolutely! Software license transfers are completely legal when done properly. Our team ensures all transfers comply with vendor terms and relevant regulations.",
    "payment methods": "We offer various payment methods including direct bank transfer, PayPal, and check. You can specify your preferred payment method when accepting our valuation offer."
  };

  // Auto scroll to bottom when new messages appear
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;

    // Add user message
    setMessages([...messages, { isUser: true, text: inputValue }]);
    
    // Clear input field
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const response = getResponse(inputValue);
      setMessages(prevMessages => [...prevMessages, { isUser: false, text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Check for matches with predefined responses
    for (const [key, value] of Object.entries(predefinedResponses)) {
      if (input.includes(key)) {
        return value;
      }
    }
    
    // Default responses if no match found
    const defaultResponses = [
      "Thanks for reaching out! For this specific query, it would be best to contact our team directly through the contact form. They'll get back to you within one business day.",
      "That's a great question. Our specialist team would be happy to address this in detail. Please fill out our contact form with your details, and we'll reach out shortly.",
      "I don't have the specific information on that. However, our license experts would be happy to help. Would you like to submit your question through our contact form?",
      "I'm not able to provide that specific information, but our team can help you with this question. Please use the contact form above and we'll respond within 24 hours."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const suggestedQuestions = [
    "How do I sell my license?",
    "What types of licenses do you accept?",
    "How long does the process take?",
    "How much can I get for my licenses?",
    "Is this legal?",
    "What payment methods do you offer?"
  ];

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-softsell-blue hover:bg-blue-700 text-white shadow-lg flex items-center justify-center z-40"
        aria-label="Chat with our AI assistant"
      >
        <MessageSquare size={24} />
      </Button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-40 flex flex-col overflow-hidden border border-gray-200 animate-fade-in" style={{ height: '500px', maxHeight: '70vh' }}>
          {/* Chat header */}
          <div className="bg-softsell-blue text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="rounded-full bg-white p-1.5 mr-2">
                <svg className="w-5 h-5 text-softsell-blue" viewBox="0 0 100 100">
                  <rect width="100" height="100" rx="20" fill="#1E64EE"/>
                  <path d="M25 35 L75 35 L75 50 L60 50 L60 65 L25 65 Z" fill="#2DD4BF"/>
                </svg>
              </div>
              <span className="font-medium">SoftBot Assistant</span>
            </div>
            <Button 
              variant="ghost" 
              className="h-8 w-8 p-0 text-white hover:bg-blue-700 hover:text-white"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <X size={18} />
            </Button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`rounded-lg px-4 py-2 max-w-[85%] ${
                    message.isUser 
                      ? 'bg-softsell-blue text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white border border-gray-200 text-gray-700 rounded-lg rounded-bl-none px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Suggested questions */}
          <div className="px-4 py-3 border-t border-gray-200 bg-white">
            <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setMessages([...messages, { isUser: true, text: question }]);
                    setIsTyping(true);
                    setTimeout(() => {
                      const response = getResponse(question);
                      setMessages(prevMessages => [...prevMessages, { isUser: false, text: response }]);
                      setIsTyping(false);
                    }, 1000);
                  }}
                  className="text-xs bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-gray-700 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-softsell-blue focus:border-transparent"
            />
            <Button 
              type="submit" 
              size="sm" 
              className="ml-2 bg-softsell-blue hover:bg-blue-700 rounded-full h-10 w-10 p-0 flex items-center justify-center"
              disabled={inputValue.trim() === ''}
              aria-label="Send message"
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
