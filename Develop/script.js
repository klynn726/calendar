var now = moment().format('[Today is] MM/DD/YYYY  [The time is] HH:mm');
document.getElementById('currentDay').innerHTML = now;
console.log(now);


var timeNow = moment().format('HH')
console.log(timeNow);


//this is the documentation showing how to get the hour, day, and format
//https://momentjs.com/docs/#/get-set/


//https://stackoverflow.com/questions/1735230/can-i-add-a-custom-attribute-to-an-html-tag#:~:text=Yes%2C%20you%20can%20do%20it!&text=')%3B%20%2F%2F%20Setter-,Element.,used%20for%20the%20current%20tag.
//add a custom html attribute to the tag for the box you want to change
// the background color of


//if timeNow is less than the hr attribute on the
//textarea tag then, else if greater than, and else equal add a class 
//in each case

//https://www.w3schools.com/jsref/prop_element_classlist.asp 
// resource for adding classes dynamically

function timeslot() {
  
  var timeChunk = document.getElementsByClassName("description");

  //loop through the items in the timeChunk array

  for (i = 0; i < timeChunk.length; i++){

  var timeSlot = timeChunk[i].getAttribute("hr");

  if (timeNow < timeSlot) {
    timeChunk[i].classList.add("future");
  }

  else if (timeNow > timeSlot) {
    timeChunk[i].classList.add("past");
  }

  else if (timeNow == timeSlot) {
    timeChunk[i].classList.add("present");
  }
}}

timeslot();

// var userInput = document.querySelector(".description");
var button = document.querySelectorAll(".saveBtn");

//set info to local storage
//attach to the correct line
  
  for (i=0; i < 12; i++) {
    button[i].addEventListener('click', function(event){ 
      event.preventDefault();
        var buttonHour = event.target.getAttribute("btnHr");
        var userInput = document.querySelector(`[hr = "${buttonHour}"]`).value;
          localStorage.setItem(buttonHour, userInput);
  })};

//get storage items and put them in their correct places
//onload  https://www.w3schools.com/js/js_events.asp

document.onload = function(){
  //have the text written to the page here 
  localStorage.getItem(buttonHour, userInput);
    

};
