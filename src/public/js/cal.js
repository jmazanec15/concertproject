var dateSelected = document.getElementById('dateSelected')
    dateSongs    = document.getElementById('dateSongs')
    concertData  = document.getElementById('myAdds')
 


$( "#date" ).datepicker({
  changeMonth: true,
  changeYear: true,
  dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  showOn: "both",
  buttonText: "THIS IS A BUTTON",
  buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
  buttonImageOnly: false,
  onSelect: function(date) {
    console.log(date);
    dateSelected.innerHTML = 'Concerts on ' + (date);
    if (dateSongs.children.length === 0) {
      for (i = 0; i < concertData.children.length; i++) {
  
          if (concertData.children[i].textContent.substr(-11, 11).match(date) == date) {
            console.log(i);
            console.log(concertData.children[i].textContent.substr(-11, 11), '<<---substr');
            dateSongs.appendChild(concertData.children[i]);
          } else {
            console.log(concertData.children[i].textContent.substr(-11, 11), '<<---substr');
            console.log('erro')
          } 
 
        }
      } else if (dateSongs.children.length > 0) {
          for (i = 0; i < dateSongs.children.length; i++) {
            console.log(i);
            concertData.appendChild(dateSongs.children[i]) 
          }
        
      } else {
        console.log('all done')
      }

  }


    
});

