var Secrets = require("./secrets.js");

var Bot = require('slackbot-api');

// create a bot
var bot = new Bot({
    token: Secrets.token
});


bot.listen(/Hello/i, function (message) {
  message.reply('Hey man!');
});

bot.listen(/Hug me/i, function (message) {
  message.reply('Grrrr... fine.');
});

bot.listen(/What is the meaning of life?/i, function (message) {
  message.reply('42');
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
