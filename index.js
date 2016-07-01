// access API using node-rest-client
var Client = require('node-rest-client').Client;

var client = new Client();

var gifCollection = [];

client.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC", function (data, response) {
	// // parsed response body as js object
	// console.log(data);
	// // raw response
	// console.log(response);

  for (var i = 0; i < data.data.length; i++) {
    gifCollection.push(data.data[i].images.fixed_height.url);
  }

  // console.log(gifCollection);
});

// grabbing token from secrets.js
var Secrets = require("./secrets.js");

var Bot = require('slackbot-api');

// create a bot
var bot = new Bot({
    token: Secrets.token
});

// var cleverbot = require("cleverbot.io"),
// var Cbot = new cleverbot('Fnjd6hQB1G2UuLLf','oEj2FhAX9ahhRRQGXhdFDNhwt2J2nkaI');
// bot.create(function (err, session) {
//   // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you
//
//   // Woo, you initialized cleverbot.io.  Insert further code here
// });
//
// bot.ask("Hello Yang!", function (err, response) {
//   console.log(response); // Will likely be: "Living in a lonely world"
// });


var yangBot = function() {

    bot.listen(/Hello/i, function (message) {
      message.reply('Hey stranger!');
    });

    bot.listen(/Hug me/i, function (message) {
      message.reply('Grrrr... fine.');
    });

    bot.listen(/What is the meaning of life?/i, function (message) {
      message.reply('42');
    });

    bot.listen(/Sax/i, function (message) {
      message.reply('https://www.youtube.com/watch?v=IBpbPmDOkOk');
    });

    bot.listen(/Yay/i, function (message) {
      message.reply('https://media.giphy.com/media/FlWgXEtj5aM5G/giphy.gif');
    });

    bot.listen(/Joke/i, function (message) {
      message.reply(bot.random('Bob lost his job for taking a day off. He worked for Google Calendar.',
      'My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.',
      'Nobody is perfect. I am nobody. Therefore...',
      "Doctor: You're overweight. Patient: I think I want a second opinion. Doctor: You're also ugly.",
      "It’s hard to explain puns to kleptomaniacs because they always take things literally.",
      'The dyslexic devil worshipper sold his soul to Santa.',
      'If you want to catch a squirrel just climb a tree and act like a nut.'));
    });

    bot.listen(/Help/i, function (message) {
      message.reply(bot.random('Restarted your server?',
      'Saved file changes?',
      'Googled your error message?',
      'Have you tried logging your variables?',
      'Are your functions defined?'));
    });

    bot.listen(/Javascript/i, function (message) {
      message.reply(bot.random('Have you called your function?',
      'Closed your function with a bracket?',
      'Did you forget var?',
      'Are you comparing values with = rather than == or === ?',
      'Semi-colons, not commas in your for loop?',
      'Looping outside boundaries of array?',
      'Mixed up && and || ?'));
    });

    bot.listen(/Quickstart rails/i, function (message) {
      message.reply(" ```1. ruby -v \n2. rails -version \n3. if rails -version returns error, 'gem install rails' \n4. rails new appname -d postgresql \n5. rails g model resourcename \n6. edit your model/resourcename.rb if you did not generate a structure \n7. rails g controller resourcename \n8. edit your controllers/resourcename_controller.rb if you did not generate options \n9. rake db:create \n10. rake db:migrate \n11. create routes.rb inside your config file if it is not there; add routes with resource:resourename or type manually \n12. rails s on console to start server \n``` ");
    });

    bot.listen(/gif me a gif/i, function (message) {
      message.reply(bot.random(gifCollection[0],
        gifCollection[1],
        gifCollection[2],
        gifCollection[3],
        gifCollection[4],
        gifCollection[5],
        gifCollection[6],
        gifCollection[7],
        gifCollection[8],
        gifCollection[9],
        gifCollection[10],
        gifCollection[11],
        gifCollection[12],
        gifCollection[13],
        gifCollection[14],
        gifCollection[15],
        gifCollection[16],
        gifCollection[17],
        gifCollection[18],
        gifCollection[19],
        gifCollection[20]));
    });

}

bot.listen(/hey/i, yangBot());
