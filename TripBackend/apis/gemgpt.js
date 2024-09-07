const axios=require('axios')
const env=require('dotenv')
env.config();
const readline = require('readline');

url='https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCXSAY_XaH_Ut_SdWg-nLwYVxyzNsjQKIc'
async function generateAnswer(question)
{
    const response=await axios({
        url:url,
        method:"post",
        data:{
            contents:[
                {parts:[{
                    text:question
                }]}
            ]
        }
    });
    console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to handle the conversation loop
function startConversation() {
    rl.question("You: ", (userInput) => {
        if (userInput.toLowerCase() === 'bye') {
            console.log("Goodbye!");
            rl.close();
        } else {
            generateAnswer(userInput).then(() => {
                startConversation();n
            });
        }
    });
}
startConversation();