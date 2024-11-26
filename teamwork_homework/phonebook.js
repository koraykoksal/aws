const readline = require("readline");

 // Store phonebook entries
const phonebook = {
    koray:"05425304155",
    ahmet:"12345678900",
    mehmet:"1313131313",
    ayşe:"123987456909",
    fatma:"98765432100",
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Main function to display menu and handle operations
const displayMenu = () => {
    console.log("\nWelcome to the phonebook application");
    console.log("1. Find phone number");
    console.log("2. Insert a phone number");
    console.log("3. Delete a person from the phonebook");
    console.log("4. Terminate");

    rl.question("Select operation on Phonebook App (1/2/3/4): ", (choice) => {
        switch (choice) {
            case "1":
                findPhoneNumber();
                break;
            case "2":
                insertPhoneNumber();
                break;
            case "3":
                deletePhoneNumber();
                break;
            case "4":
                console.log("Exiting Phonebook");
                rl.close();
                break;
            default:
                console.log("Invalid selection, please try again.");
                displayMenu();
        }
    });
};

// Function to find a phone number
const findPhoneNumber = () => {
    rl.question("Please enter a name : ", (name) => {

        const entryName = name.toLowerCase()

        if (phonebook[entryName]) {
            console.log(`\n\n*** ${entryName}'s phone number : ${phonebook[entryName]} ***`);
        } else {
            console.log(`Couldn't find phone number of ${entryName}`);
        }
        displayMenu();
    });
};

// Function to insert a phone number
const insertPhoneNumber = () => {
    rl.question("Insert name of the person: ", (name) => {
        rl.question("Insert phone number of the person: ", (number) => {
            if (!/^\d+$/.test(number)) {
                console.log("Invalid input format, cancelling operation ...");
            } else {
                phonebook[name] = number;
                console.log(`Phone number of ${name} is inserted into the phonebook`);
            }
            displayMenu();
        });
    });
};

// Function to delete a phone number
const deletePhoneNumber = () => {
    rl.question("Whom to delete from phonebook: ", (name) => {
        if (phonebook[name]) {
            delete phonebook[name];
            console.log(`${name} is deleted from the phonebook`);
        } else {
            console.log(`${name} is not found in the phonebook`);
        }
        displayMenu();
    });
};

// Start the application
displayMenu();