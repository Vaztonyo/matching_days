var day1 = document.querySelector('.date1');
var day2 = document.querySelector('.date2');
var table = document.querySelectorAll('.days');

var getThatDay = function(date) {
    var whatDay = date.getDay();
    return whatDay;
};

var matchDays = function() {
  clearDays();
    var theDay1 = new Date(day1.value);
    var theDay2 = new Date(day2.value);
    if (getThatDay(theDay1) === getThatDay(theDay2)) {
        table[getThatDay(theDay1)].classList.add('match');
    }
    else {
      table[getThatDay(theDay1)].classList.add('day1');
      table[getThatDay(theDay2)].classList.add('day2');
    }

};

var clearDays = function(){
  for (var i = 0; i < table.length; i++) {
    table[i].classList.remove('match');
    table[i].classList.remove('day1');
    table[i].classList.remove('day2');
  }
};
day1.addEventListener('change', matchDays);
day2.addEventListener('change', matchDays);
