const axios=require('axios')
const env=require('dotenv')
env.config();
const readline = require('readline');

url='https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCXSAY_XaH_Ut_SdWg-nLwYVxyzNsjQKIc'
const ChatBot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        // Add user message to chat
        setMessages([...messages, { type: 'user', text: input }]);

        try {
            const response = await axios.post(url, {
                contents: [
                    { parts: [{ text: input }] }
                ]
            });

            // Extract the response text
            const answer = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
            
            // Add AI response to chat
            setMessages([...messages, { type: 'user', text: input }, { type: 'ai', text: answer }]);
        } catch (error) {
            console.error("Error in API call:", error.message);
        }

        // Clear input field
        setInput('');
    };
}