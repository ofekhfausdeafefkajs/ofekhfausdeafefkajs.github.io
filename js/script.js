$(document).ready(function() {
 var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<11){
    dd='0'+dd -1;
} else {
    dd='0'+dd -1; 
}
if(mm<10){
    mm='0'+mm;
} 
var today = dd+'.'+mm+'.'+yyyy;
document.getElementById("date").innerHTML = today;


// test();
// function test(){
//     var number1 = (Math.round(parseInt(Date.now().toString().substr(4,6))/2));
//     setTimeout(test,2000);
//     document.getElementById("count").innerHTML = number1;
// }
});

