/*
File : Assignment 1 Portfolio
Name : Rutvik Patel
Student ID : 301302391
Date : 06 Feb 2023
*/

(function(){
    function start() {
        console.log("App Started...");
    }
    window.addEventListener("load",start);
})();


/* Function to send user back to home page 
    from contact page*/
var button = document.getElementById("button1");

button.setAttribute("onClick", "move();", "save();");
function move() {
    
    window.location.href = "/home";

}
function save(){
    var fullname = document.myform.fname.value;
    var number = document.getElementById("mnum").value;
    
    var email = document.getElementById("email").value;
    
    var message = document.getElementById("message").value;
}