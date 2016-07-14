var dateSelected = document.getElementById('dateSelected')
 dateSongs       = document.getElementById('dateSongs')
 concertData     = document.getElementById('myAdds')
 


$( "#date" ).datepicker({
  changeMonth: true,
  changeYear: true,
  dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  showOn: "button",
  buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
  buttonImageOnly: true,
  onSelect: function(date) {
    dateSelected.innerHTML = 'Concerts on ' + (date);

    

    if (concertData.children[0].innerHTML.match(date)[0] === (date) ) {
     var arr = concertData.children[0].innerHTML.split('/2016'); 
     for (i =0; i <= arr.length; i++) {
      dateSongs.appendChild(concertData);
      console.log(arr[i])
     }
     
      dateSongs.appendChild(concertData);
      console.log('success');
    } else {
        console.log('error');

  };
}
    




});

