const { response } = require("./chatgpt");

// Let Test The Bot Js 
response("Hey bro").then(data => {
    console.log(data.status,data.data.choices[0]);
  }).catch(err =>{
    console.log(err);
  })