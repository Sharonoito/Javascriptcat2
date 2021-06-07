
// // Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
}
function details(){
    var form=document.getElementById("form").submit();
    const searchInput=document.getElementById("CompanyName");
    const searchInput=document.getElementById("PhoneNumber");
    const searchInput=document.getElementById("Location");
    console.log(form)
searchInput.addEventListener("keyup",function(details) {
     console.log(details)

     const lang=navigator.language;
     let date=new Date();
     
     let month=date.getMonth();
     let dayNumber=date.getDate();
     let dayName=date.toLocaleString(lang,{weekday:"long"});
     let monthName=date.toLocaleString(lang,{month:"long"});
     let year=date.getFullYear();
     
     
     
     document.getElementById("monthName").innerHTML=monthName;
     document.getElementById("dayName").innerHTML=dayName;
     document.getElementById("dayNumber").innerHTML=dayNumber;
     document.getElementById("year").innerHTML=year;
     

});


}
// 3) how the script for moving the carousel works
// first,we declare carousel  by finding the item with the index position,then we create a function to handle the event that 
// makes the image to move.For loop is used to make sure that on each and every list containing the image is checked 
// and the image is displayed on the screen.



// 4) 	What will the code below output to the console and why?

// outer func:  this.name = Lovelace
// outer func:  self.name = Lovelace
// inner func:  this.name = undefined
// inner func:  self.name = Lovelace

// inner function brings undefined because  it is easier to access global object 
// using the globalThis property and in the second function when you 
// console.log("inner func:  self.name = " + self.name); it will bring undefine since 
// it has not use this keyword.
// This also depends on how the two functions are called.



