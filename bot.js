// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const { response } = require("./chatgpt");

// Let Test The Bot Js 

venom
  .create({
    session: 'session-name', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body && message.isGroupMsg === false && message.from !== 'status@broadcast') {
      if(message.body === "419"){
          client
          .sendText(message.from, "Shutdown Server ")
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        process.exit(1)
      }
        response(message.body).then(data => {
            console.log(data.data.choices[0]);
            client
            .sendText(message.from, data.data.choices[0].text)
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
          }).catch(err =>{
            console.log(err);
          })
    }
  });
}