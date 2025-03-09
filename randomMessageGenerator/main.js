import readline from 'readline';
// random message generator. fortuneTeller function
const fortuneTeller = () => {
    const beginning = ['My sources', 'The signs', 'Not', 'I have a feeling', 'I predict', 'I foresee', 'I sense'];
    const middle = ['point to', 'say', 'likely', 'bare', 'indicate', 'suggest', 'hint at'];
    const end = ['yes', 'no', 'unknown'];

    const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

    return `${getRandomElement(beginning)} ${getRandomElement(middle)} ${getRandomElement(end)}`;
};
// Function to handle user input
const userInput = (input, rl) => {
    if (input === 'fortune') {
        // Generate and display a random message
        console.log(''); // Add a blank line for readability
        const message = fortuneTeller();
        console.log(message);
        console.log('');
        // Continue prompting the user
        promptUser(rl);
    } else if (input === 'exit') {
        // Display goodbye message and close the readline interface
        console.log('');
        console.log('Goodbye!');
        rl.close();
    } else {
        // Inform the user of invalid input
        console.log('');
        console.log('Invalid input. Please type "fortune" to hear your fate or "exit" to exit the program.');
        console.log(''); 
        promptUser(rl);
    }
};
// Function to prompt the user for input
const promptUser = (rl) => {
    // Prompt the user with a question
    rl.question('Welcome to the drunk fortune teller! Type "fortune" to hear your fate or "exit" to exit the program: ', (input) => {
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
