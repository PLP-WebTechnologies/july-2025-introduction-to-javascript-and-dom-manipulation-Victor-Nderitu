// Part 1: JavaScript Basics

// Variables and Data Types
let userName = "Guest";
const defaultAge = 18;
var isLoggedIn = false;
let userHobbies = ["reading", "coding", "gaming"];

// Conditional logic example
function checkAge() {
    const ageInput = document.getElementById('ageInput');
    const outputElement = document.getElementById('ageOutput');
    const age = parseInt(ageInput.value) || 0;
    
    if (age <= 0) {
        outputElement.innerHTML = "Please enter a valid age.";
        outputElement.style.color = "red";
    } else if (age < 13) {
        outputElement.innerHTML = "You are a child.";
        outputElement.style.color = "blue";
    } else if (age < 18) {
        outputElement.innerHTML = "You are a teenager.";
        outputElement.style.color = "green";
    } else if (age < 65) {
        outputElement.innerHTML = "You are an adult.";
        outputElement.style.color = "purple";
    } else {
        outputElement.innerHTML = "You are a senior.";
        outputElement.style.color = "orange";
    }
}

// String operations
function processText() {
    const textInput = document.getElementById('textInput');
    const outputElement = document.getElementById('textOutput');
    const text = textInput.value;
    
    if (text.length === 0) {
        outputElement.innerHTML = "Please enter some text.";
        return;
    }
    
    outputElement.innerHTML = `
        Original: ${text}<br>
        Length: ${text.length} characters<br>
        Uppercase: ${text.toUpperCase()}<br>
        Lowercase: ${text.toLowerCase()}<br>
        First character: ${text.charAt(0)}<br>
        Last character: ${text.charAt(text.length - 1)}
    `;
}

// Part 2: JavaScript Functions

// Function to calculate total price
function calculateTotal() {
    const price = parseFloat(document.getElementById('priceInput').value) || 0;
    const quantity = parseInt(document.getElementById('quantityInput').value) || 0;
    const total = price * quantity;
    
    document.getElementById('totalOutput').innerHTML = `
        Price: $${price.toFixed(2)}<br>
        Quantity: ${quantity}<br>
        Total: $${total.toFixed(2)}
    `;
}

// Function to format name
function formatName() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    
    if (!firstName || !lastName) {
        document.getElementById('nameOutput').innerHTML = "Please enter both first and last name.";
        return;
    }
    
    document.getElementById('nameOutput').innerHTML = `
        Full Name: ${firstName} ${lastName}<br>
        Formal: ${lastName}, ${firstName}<br>
        Initials: ${firstName.charAt(0)}.${lastName.charAt(0)}.
    `;
}

// Part 3: JavaScript Loops

// For loop example - countdown
function startCountdown() {
    const count = parseInt(document.getElementById('countdownInput').value) || 5;
    const outputElement = document.getElementById('countdownOutput');
    outputElement.innerHTML = "";
    
    for (let i = count; i >= 0; i--) {
        setTimeout(() => {
            outputElement.innerHTML = i === 0 ? "Blast off! 🚀" : `Countdown: ${i}`;
        }, (count - i) * 1000);
    }
}

// While loop example - number guessing game
function startGuessingGame() {
    const outputElement = document.getElementById('gameOutput');
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let guesses = 0;
    let guessedCorrectly = false;
    
    outputElement.innerHTML = "I'm thinking of a number between 1 and 10. Try to guess it!";
    
    setTimeout(() => {
        while (!guessedCorrectly) {
            const guess = parseInt(prompt("Enter your guess (1-10):")) || 0;
            guesses++;
            
            if (guess === randomNumber) {
                outputElement.innerHTML = `Congratulations! You guessed the number ${randomNumber} in ${guesses} attempts.`;
                guessedCorrectly = true;
            } else if (guess < randomNumber) {
                alert("Too low! Try again.");
            } else {
                alert("Too high! Try again.");
            }
        }
    }, 1000);
}

// forEach example - process user list
function processUsers() {
    const users = [
        { name: "Alice", age: 25, status: "active" },
        { name: "Bob", age: 30, status: "inactive" },
        { name: "Charlie", age: 35, status: "active" },
        { name: "Diana", age: 28, status: "pending" }
    ];
    
    const userList = document.getElementById('userList');
    userList.innerHTML = "";
    
    users.forEach((user, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${user.name} (${user.age}) - ${user.status}
            <button onclick="highlightUser(${index})">Highlight</button>
        `;
        userList.appendChild(listItem);
    });
}

function highlightUser(index) {
    const items = document.querySelectorAll('#userList li');
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('highlight');
        } else {
            item.classList.remove('highlight');
        }
    });
}

// Part 4: DOM Manipulation

// Toggle theme
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Add new item
function addNewItem() {
    const input = document.getElementById('newItemInput');
    const itemText = input.value.trim();
    
    if (itemText) {
        const list = document.getElementById('itemList');
        const newItem = document.createElement('li');
        newItem.textContent = itemText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            list.removeChild(newItem);
        };
        
        newItem.appendChild(deleteButton);
        list.appendChild(newItem);
        
        input.value = '';
    }
}

// Change color box
function changeColor() {
    const colors = ['#6a11cb', '#2575fc', '#ff4e50', '#f9d423', '#ecf0f1', '#2c3e50'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('colorBox').style.backgroundColor = randomColor;
}

// Complete task
function completeTask(index) {
    const tasks = document.querySelectorAll('#interactiveList li');
    if (tasks[index]) {
        tasks[index].classList.toggle('task-completed');
    }
}

// Add and remove paragraphs
function addParagraph() {
    const contentDiv = document.getElementById('dynamicContent');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `This is dynamically added paragraph #${contentDiv.children.length + 1}.`;
    contentDiv.appendChild(newParagraph);
}

function removeLastParagraph() {
    const contentDiv = document.getElementById('dynamicContent');
    if (contentDiv.lastChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }
}
