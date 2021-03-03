var now = moment().format('[Today is] MM/DD/YYYY  [The time is] HH:MM');
document.getElementById('currentDay').innerHTML = now;

var before = moment().isBefore(now)
document.getElementById('description')

var after = moment().isAfter(now)
document.getElementById('description')

var same = moment().isSame(now)
document.getElementById('description')



