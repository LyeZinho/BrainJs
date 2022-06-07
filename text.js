/*
bring in the brain.js dependency
*/
const brain = require("brain.js");


/*
npm i brain.js

Import the data file
*/
const data = require('./text.json')


/*
Create the  neural network
*/
const network = new brain.recurrent.LSTM();

/*
Training the model and setting the number 
of iteration to make during the training
*/


network.train(trainingData, {
    iterations: 2000
})


/*
Supply the input to classify
*/
const output = network.run('navigate the website easily')

/*
Printing the output on the console
*/
console.log(`Category: ${output}`)

