var now = moment().format('[Today is] MM/DD/YYYY  [The time is] HH:mm');
document.getElementById('currentDay').innerHTML = now;
// console.log(now);


var timeNow = moment().format('HH')
// console.log(timeNow);


//this is the documentation showing how to get the hour, day, and format
//https://momentjs.com/docs/#/get-set/


//https://stackoverflow.com/questions/1735230/can-i-add-a-custom-attribute-to-an-html-tag#:~:text=Yes%2C%20you%20can%20do%20it!&text=')%3B%20%2F%2F%20Setter-,Element.,used%20for%20the%20current%20tag.
//add a custom html attribute to the tag for the box you want to change
// the background color of
//tutor advised that for js "data-" be added in front of the custom attribute

//if timeNow is less than the hr attribute on the
//textarea tag then, else if greater than, and else equal add a class 
//in each case to change color per time 

//https://www.w3schools.com/jsref/prop_element_classlist.asp 
// resource for adding classes dynamically

function timeslot() {
  
  var timeChunk = document.getElementsByClassName("description");

  //loop through the items in the timeChunk array and adds color by time 

  for (i = 0; i < timeChunk.length; i++){

  var timeSlot = timeChunk[i].getAttribute("data-hr");

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


//get storage items and attach to correct element id
//print local storage values to screen on reload

function printData(){
  document.getElementById('07').value = localStorage.getItem("07");
  document.getElementById('08').value = localStorage.getItem("08");
  document.getElementById('09').value = localStorage.getItem("09");
  document.getElementById('10').value = localStorage.getItem("10");
  document.getElementById('11').value = localStorage.getItem("11");
  document.getElementById('12').value = localStorage.getItem("12");
  document.getElementById('13').value = localStorage.getItem("13");
  document.getElementById('14').value = localStorage.getItem("14");
  document.getElementById('15').value = localStorage.getItem("15");
  document.getElementById('16').value = localStorage.getItem("16");
  document.getElementById('17').value = localStorage.getItem("17");
  document.getElementById('18').value = localStorage.getItem("18");
};

var button = document.querySelectorAll(".saveBtn");

// //set info to local storage on click
// //attach to the correct line
  
  for (i=0; i < 12; i++) {
    button[i].addEventListener('click', function(event){ 
      event.preventDefault();
        var buttonHour = event.target.getAttribute("btnHr");
        var userInput = document.querySelector(`[data-hr = "${buttonHour}"]`).value;
          localStorage.setItem(buttonHour, userInput);
  })};

  printData();