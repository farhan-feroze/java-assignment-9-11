
//Q8 check if number is divisible by 3

var inputNum= +prompt("Please enter a number")
var remainder = inputNum%3

if(remainder===0){
    alert("Number is divisible by 3")
}
else{
    alert("Number is not divisible by 3")
}




//Q9 check if number is even or odd

var evenInput = +prompt("Please enter a number")
var remainderEven = evenInput%2

if(remainderEven===0){
    alert("Number is Even")
}
else{
    alert("Number is Odd")
}





//Q10 Temp input
var temp = +prompt("Enter temperature in degrees.")


if(temp > 40){
    alert("Its too hot outside")
}
else if(temp > 30){
    alert("The weather today is normal")
}
else if(temp > 20){
    alert("Todays's weather is cool")
}
else if(temp > 10){
    alert("OMG! Today's weather is so cool")
}





//Q11 Calculator using operators as input

var num1 = +prompt("Enter 1st number.")
var num2 = +prompt("Enter 2nd number.")
var operator = prompt("Please enter an operator")

var sum = num1 + num2
var sub = num1 - num2
var mul = num1*num2
var div = num1/num2

if(operator === "+"){
    aler("The sum of the numbers given is = " + sum)
}
else if(operator === "-"){
    aler("The subtraction of the numbers given is = " + sub)
}
else if(operator === "/"){
    aler("The division of the numbers given is = " + div)
}
else if(operator === "*"){
    aler("The multiplication of the numbers given is = " + mul )
}