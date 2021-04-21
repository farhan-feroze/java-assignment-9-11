//Q1 City Input

var city = prompt("Please enter your city.")

if((city === "Karachi")||(city === "karachi")){
    alert("Welcome to the city of lights!")
}
else{
    alert("Welcome to "+city)
}




//Q2 Gender Input

var gender = prompt("Please enter your gender.")

if(gender === "male"){
    alert("Good Morning Sir!")
}
else{
    alert("Good Morning Ma'am!")
}




//Q3 
//dont know how to make table using document.write.





//Q4

var remainingPetrol = +prompt("Please input remaining petrol in litres")

if(remainingPetrol <= 0.25){
    alert("Please refill the fuel in your car.")
}
else{
    alert("You are good to go.")
}





//Q5 Scripts

var a = 4;
if(++a === 5){
    alert("Given conditon for variable 'a' is true.")
}
else{
    alert("Given conditon for variable 'a' is not true.")
}



var b = 82
if(b++ === 83){
    alert("Given conditon for variable 'b' is true.")
}
else{
    alert("Given conditon for variable 'b' is not true.")
}



var c = 12
if(c++ === 13){
    alert("condition '1' is true.")
}
else if(c===13){
    alert("condition '2' is true.")
}
else if(++c <14){
    alert("condition '3' is true.")
}
else if(c===13){
    alert("condition '4' is true.")
}




//d
var materialCost = 20000
var laborCost = 2000
var totalCost = materialCost + laborCost

if(totalCost === laborCost + materialCost){
    alert("The cost equals")
}


//e
if(true){
    alert("True");
}

if(false){
    alert("False");
}



//f
if("car"<"cat"){
    alert("car is smaller than cat")
}




//Q6 marksheet

document.write("<h2>Mark Sheet</h2>")

var sub1 = +prompt("Enter 1st Subject Marks.")
var sub2 = +prompt("Enter 2nd Subject Marks.")
var sub3 = +prompt("Enter 3rd Subject Marks.")
var totalObtMarks = sub1 + sub2 + sub3
var totalMarks = 300
var percentage = (totalObtMarks/totalMarks)*100

if(percentage >= 80){
    document.write("Total Marks: "+totalMarks+"<br>Marks Obtained: "+totalObtMarks+"<br>Percentage: "+percentage+"%<br>Grade: A-One<br>Remarks: Excellent")
}
else if(percentage >= 70){
    document.write("Total Marks: "+totalMarks+"<br>Marks Obtained: "+totalObtMarks+"<br>Percentage: "+percentage+"%<br>Grade: A<br>Remarks: Good")
}
else if(percentage >= 60){
    document.write("Total Marks: "+totalMarks+"<br>Marks Obtained: "+totalObtMarks+"<br>Percentage: "+percentage+"%<br>Grade: B<br>Remarks: You Need to improve")
}
else if(percentage < 60){
    document.write("Total Marks: "+totalMarks+"<br>Marks Obtained: "+totalObtMarks+"<br>Percentage: "+percentage+"%<br>Grade: Fail<br>Remarks: Sorry")
}


//Q7 Guess Game

var secretNum = 7
var userNum = +prompt("Please guess the secret number")

if(userNum===secretNum){
    alert("Bingo! Correct answer.")
}
else if(userNum===++secretNum){
    alert("Close enough to the  correct answer.")
}




