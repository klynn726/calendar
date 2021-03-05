var now = moment().format('[Today is] MM/DD/YYYY  [The time is] HH:mm');
document.getElementById('currentDay').innerHTML = now;
console.log(now);


var timeNow = moment().format('HH')
console.log(timeNow);


//this is the documentation showing how to get the hour, day, and format
//https://momentjs.com/docs/#/get-set/


//if then for past, present, future and add class names

//how to tell what time the block is associated with?
//https://stackoverflow.com/questions/1735230/can-i-add-a-custom-attribute-to-an-html-tag#:~:text=Yes%2C%20you%20can%20do%20it!&text=')%3B%20%2F%2F%20Setter-,Element.,used%20for%20the%20current%20tag.
//add a custom html attribute to the tag for the box you want to change the background color of

//if timeNow is less than the hr attribute on the
//textarea tag then, else if greater than, and else equal add a class 
//in each case

//https://www.w3schools.com/jsref/prop_element_classlist.asp 
// resource for adding classes dynamically

function timeslot() {

  var timeChunk = document.getElementsByClassName("description");
  var timeSlot = timeChunk.getAttritibute("hr");

  if (timeNow < timeSlot) {
    document.getElementsByClassName("description").classList.add("future");
  }

  else if (timeNow > timeSlot) {
    document.getElementsByClassName("description").classList.add("past");
  }

  else if (timeNow == timeSlot) {
    document.getElementById("description").classList.add('present');
  }
}