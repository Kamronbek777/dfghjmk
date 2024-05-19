let userName = prompt("Type your name");
let userText = prompt("Enter random letter");
let upperCase = userName.toLowerCase();

if (upperCase.includes(userText)) {
    alert("Yes");
}else {
    alert("No");
}