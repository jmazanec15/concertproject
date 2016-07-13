// add same funtion on load



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
      $('.myAdds').append('<li>'+ self.text +'</li>');
    }
  });
});
