const input = document.getElementById("string");

function reverseString(string){
    return string.split("").reverse().join("");
}

function check(){
    const value = input.value;
    if(value == reverseString(value)){
        alert("This string is a palindrome");
    }
    else{
        alert("This string is not a palindrome");
    }
}