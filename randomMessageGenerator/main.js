import readline from 'readline';
const asciiArt = {
  crystalBall: `
        .::::.
     ::::hear:::.  
    :::::::::::::::
    :::::your::::::
     '::::::::::::'
       ':fate:::'
         '::::'
    `
};
// random message generator. fortuneTeller function
const createFortuneTeller = () => {
    const beginning = [
        "In the near future,",
        "Soon,",
        "Very shortly,",
        "In the coming days,",
        "Before the next full moon,"];
    const middle = [
        "you will find great fortune",
        "a surprise will come your way",
        "an old friend will reach out",
        "you will discover a hidden talent",
        "an exciting opportunity will present itself"];
    const end = [
        "that will change your life.",
        "and bring you much happiness.",
        "that will lead to success.",
        "and fill you with joy.",
        "that will broaden your horizons."];

    const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

    return {
        getFortune: () => {
            console.log('');
            console.log(`${getRandomElement(beginning)} ${getRandomElement(middle)} ${getRandomElement(end)}`);
            console.log('');
        }
    };
};
const fortuneTeller = createFortuneTeller();
// Function to handle user input
const userInput = (input, rl) => {
    if (input === 'fortune') {
        // Generate and display a random message
        fortuneTeller.getFortune();
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
        console.log('Invalid input. Please try again.');
        console.log(''); 
        promptUser(rl);
    }
};
// Function to prompt the user for input
const promptUser = (rl) => {
    // Prompt the user with a question
    rl.question('Type "fortune" to hear your fate or "exit" to exit the program: ', (input) => {
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
// Display ASCII art
console.log(asciiArt.crystalBall);
// Start the program by calling promptUser
promptUser(rl);
