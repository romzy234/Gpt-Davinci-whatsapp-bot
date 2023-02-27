const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
console.log(process.env)

const configuration = new Configuration({
  apiKey: process.env.CHAT_GPT_KEY,
});
const openai = new OpenAIApi(configuration);




 openai.createCompletion({
        model: "text-davinci-003",
        prompt: "why cant you",
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.28,
        stop: ["You:"],
      }).then(data => {
        console.log(data.status,data.data.choices);
      }).catch(err =>{
        console.log(err);
      })
