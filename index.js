const characters = ["A","B","C","D","E","F",
"G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b",
"c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x",
"y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9","~","`","!","@","#","$","%","^",
"&","*","(",")","_","-","+","=","{","[","}",
"]",",","|",":",";","<",">",".","?",
"/"];

let pswOneEl = document.getElementById("psw-one");
let pswTwoEl = document.getElementById("psw-two");
let notificationEl = document.getElementById("copy-notification");
let passwordLengthEl = document.getElementById("length-input");
passwordLength = 12;

function generate() {
   
    let randomPswOne = "";
    let randomPswTwo = "";

    for (let i=0;i<passwordLength;i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        let randomIndexTwo = Math.floor(Math.random() * characters.length)
        randomPswOne += characters[randomIndexOne];
        randomPswTwo += characters[randomIndexTwo];
    }
    
    pswOneEl.textContent = randomPswOne;
    pswTwoEl.textContent = randomPswTwo;
    
}

function setPasswordLength() {
    passwordLength = 5; 
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification();
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}

function showNotification() {
    notificationEl.classList.add("show");
    setTimeout(() => {
        notificationEl.classList.remove("show");
    }, 750); // Notification is shown for 2 seconds
}



pswOneEl.addEventListener("click", () => {
    copyToClipboard(pswOneEl.textContent);
});

pswTwoEl.addEventListener("click", () => {
    copyToClipboard(pswTwoEl.textContent);
});