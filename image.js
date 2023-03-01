const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const configuration = new Configuration({
    apiKey: process.env.CHAT_GPT_KEY,
});
const openai = new OpenAIApi(configuration);

const ima =async () =>{
    const response = await openai.createImage({
        prompt: "openai logo on a green background",
        n: 1,
        size: "1024x1024",
      });
      image_url = response.data.data[0].url;

      console.log(image_url);
}

ima()