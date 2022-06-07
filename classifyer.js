/*
Dados para treinar o modelo

classificação de pessoas aptas para o serviço:

[
    1, -> Nivel de escolaridade
    1, -> Aptidão para o serviço
    1, -> Comportamento
    1  -> Capacdade de auto aprendizado
]

dados para testar o modelo

[1, 1, 1, 1] -> apto
[1, 1, 0, 1] -> apto
[1, 1, 0, 1] -> apto
[1, 1, 1, 0] -> apto
[1, 1, 0, 0] -> não apto
[0, 1, 0, 1] -> não apto



//input: [1, 1, 1, 1],  output: 1
//input: [1, 0, 1, 0],  output: 0
//input: [1, 0, 0, 0],  output: 0
//input: [0, 1, 0, 0],  output: 0
//input: [0, 1, 1, 1],  output: 1
//input: [0, 1, 0, 1],  output: 1
//input: [0, 0, 1, 1],  output: 0
//input: [0, 0, 1, 0],  output: 0
//input: [0, 0, 0, 1],  output: 0
//input: [1, 1, 1, 0],  output: 1
*/

const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
  };

const brain = require('brainjs');

const net = new brain.NeuralNetwork(config);

net.train([
    {input: [1, 1, 1, 1], output: [1]},
    {input: [1, 0, 1, 0], output: [0]},
    {input: [1, 0, 0, 0], output: [0]},
    {input: [0, 1, 0, 0], output: [0]},
    {input: [0, 1, 1, 1], output: [1]},
    {input: [0, 1, 0, 1], output: [1]},
    {input: [0, 0, 1, 1], output: [0]},
    {input: [0, 0, 1, 0], output: [0]},
    {input: [0, 0, 0, 1], output: [0]},
    {input: [1, 1, 1, 0], output: [1]},
    {input: [1, 0, 1, 1], output: [1]}
]);

let output = net.run([1, 0, 0, 1])

console.log(`Probabilidade: ${output} Resultado: ` + (output > 0.5 ? 'Apto' : 'Não Apto'));