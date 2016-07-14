// add same funtion on load
$('document').ready(function() {
    var self = this;

  $.ajax({
    url:'/apis/add',
    type:'post',
    data: {
      event:  this.text,
      userId: $('#userId').text()
    },
    error: function(error) {
      console.log(error);
      alert(error);
    },
    success: function(data) {
    var concerts = data.concertIDs.filter(function(n){ return n != undefined }); 
    for (var i = 0; i <concerts.length; i++) {
      $('.myAdds').append('<li>'+ concerts[i] +'</li>');
    }
  }
  });
})


// Concert Add Event Handler
// -------------------------
// Listens for clicks on concert
// anchor tags and stores them to DB
// via AJAX request.
$('.concertClick').click(function() {
  var self = this;

  $.ajax({
    url:'/apis/add',
    type:'post',
    data: {
      event:  this.text,
      userId: $('#userId').text()
    },
    error: function(error) {
      console.log(error);
      alert(error);
    },
    success: function(data) {
      $('.myAdds').empty();
      var concerts = data.concertIDs.filter(function(n){ return n != undefined }); 
      for (var i = 0; i <concerts.length; i++) {
        $('.myAdds').append('<li>'+ concerts[i] +'</li>');
      }

    }
  });
});
