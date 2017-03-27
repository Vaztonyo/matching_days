var day1 = document.querySelector('.date1');
var day2 = document.querySelector('.date2');
var myButton = document.querySelector('.myButton');
var table = document.querySelectorAll('.days');
var clearButton = document.querySelector('.clearButton')

var getThatDay = function(date) {
    var whatDay = date.getDay();
    return whatDay;
};

myButton.addEventListener('click', function() {
    var theDay1 = new Date(day1.value);
    var theDay2 = new Date(day2.value);
    if (getThatDay(theDay1) === getThatDay(theDay2)) {
        table[getThatDay(theDay1)].classList.add('match');
    } else {
        table[getThatDay(theDay1)].classList.add('day1');
        table[getThatDay(theDay2)].classList.add('day2');
    }

    clearButton.addEventListener('click', function(){
        table[getThatDay(theDay1)].classList.remove('match');
        table[getThatDay(theDay1)].classList.remove('day1');
        table[getThatDay(theDay2)].classList.remove('day2');
    });
});

// clearButton.addEventListener('click', function(){
//     table[getThatDay(theDay1)].classList.remove('match');
//     table[getThatDay(theDay1)].classList.remove('day1');
//     table[getThatDay(theDay2)].classList.remove('day2');
// });
