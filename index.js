const passwordBox = document.getElementById("Password");

const length = 8;
const uppercase = " ABCDEFGHIJKLMNOPQURSTVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*(){}|<>?\][-=_+";



const allChars = uppercase+lowercase+number+symbol;


function createPassword(){
    let Password = " ";
    Password += uppercase[Math.floor(Math.random()*uppercase.length)];
    Password += lowercase[Math.floor(Math.random()*lowercase.length)];
    Password += number[Math.floor(Math.random()*number.length)];
    Password += symbol[Math.floor(Math.random()*symbol.length)];



    while(length>=Password.length){
        Password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = Password;

}


function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}