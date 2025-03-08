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
    const part1 = ['foo', 'bar', 'baz', 'qux'];
    const part2 = ['hello', 'world', 'foo', 'bar'];
    const part3 = ['fi', 'fye', 'fo', 'fum']; // these will eventually be populated with data

    const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

    return `${getRandomElement(part1)} ${getRandomElement(part2)} ${getRandomElement(part3)}`;
};
// placeholder input function. this is just to get the logic in place.
const userInput = (input, rl) => {
    if (input === 'generate') {
        // Generate and display a random message
        console.log(''); // Add a blank line for readability
        const message = messageFactory();
        console.log(message);
        console.log(''); // Add a blank line for readability
        // Continue prompting the user
        promptUser(rl);
    } else if (input === 'exit') {
        // Display goodbye message and close the readline interface
        console.log(''); // Add a blank line for readability
        console.log('Goodbye!');
        rl.close();
    } else {
        // Inform the user of invalid input
        console.log('Invalid input. Please type "generate" to generate a message or "exit" to exit the program.');
        // Continue prompting the user
        promptUser(rl);
    }
};

// Function to prompt the user for input
const promptUser = (rl) => {
    // Prompt the user with a question
    rl.question('Type "generate" to generate a message or "exit" to exit the program: ', (input) => {
        // Convert input to lowercase
        input = input.toLowerCase();

        // Process the user input
        userInput(input, rl);
    });
};

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Start the program by calling promptUser
promptUser(rl);
