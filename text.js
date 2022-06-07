/*
bring in the brain.js dependency
*/
const brain = require("brainjs");


/*
npm i brain.js

Import the data file
*/
const data = require('./text.json')


/*
Create the  neural network
*/
const lstm = new brain.recurrent.LSTM();

/*
Training the model and setting the number 
of iteration to make during the training
*/
const result = lstm.train(trainingData, {
    iterations: 2000,
    log: details => console.log(details),
    errorThresh: 0.011
});


/*
Supply the input to classify
*/
const output = lstm.run('navigate the website easily')

/*
Printing the output on the console
*/
console.log(`Category: ${output}`)

