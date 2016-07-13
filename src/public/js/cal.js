var dateSelected = document.getElementById('concertsToday')
var concertData  = document.getElementById('concertData')
$( "#date" ).datepicker({
  changeMonth: true,
  changeYear: true,
  dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  onSelect: function(date) {
    dateSelected.innerHTML = 'Concerts Today: ' + (date);
    concertData.innerHTML  = 'These concerts are today: ';

  }
});

