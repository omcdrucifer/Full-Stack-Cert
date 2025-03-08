// I still need to figure out what context I want to use this in
// Maybe a chat bot or a fortune cookie generator or some kind of 
// quote generator or inspirational message generator, etc
// as we can see, the possibilities are vast
// I also need to consider interactivity. How will the user interact with the program
// It will be a terminal program, because we are working with basic concepts
// This makes me want to lean toward a prompt
// It also could just run from initialization without user input, but that seems less fun

import readline from 'readline'; // I will use readline to get user input
// I will use the factory function to generate messages
const messageFactory = () => {
    const messages1 = ['foo', 'bar', 'baz', 'qux'];
    const messages2 = ['hello', 'world', 'foo', 'bar'];
    const messages3 = ['fi', 'fye', 'fo', 'fum']; // these will eventually be populated with data

    const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

    return `${getRandomElement(messages1)} ${getRandomElement(messages2)} ${getRandomElement(messages3)}`;
};
// placeholder input function. this is just to get the logic in place.
const userInput = input => {
    if (input.toLowerCase() === 'generate') {
        const message = messageFactory();
        console.log(message);
    } else {
        console.log('Invalid input. Please type "generate" to generate a message.');
    }
};
// create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// prompt user for input
const promptUser = () => {
    rl.question('Type "generate" to generate a message: ', input => {
        userInput(input);
        rl.close();
    });
};
// create an exit function just a concept, not fully implemented
// in its current state, the program exits after one input
const promptExit = () => {
    rl.question('Type "exit" to exit the program: ', input => {
        if (input.toLowerCase() === 'exit') {
            console.log('Goodbye!');
            rl.close();
        }
        else {
            console.log('Invalid input. Please type "exit" to exit the program.');
            promptExit();
        }
    });
};
// start the program
promptUser();
