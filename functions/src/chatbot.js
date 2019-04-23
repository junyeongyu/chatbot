'use strict';

const fetch = require('node-fetch');
const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports.statusesUpdate = async (event, context) => {
  
  await client.post('statuses/update', {status: 'I Love Twitter'})
  .then(function (tweet) {
    console.log('response (statuses/update): ' + tweet);
  })
  .catch(function (error) {
    throw error;
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

