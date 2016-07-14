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

      $('.myAdds').append('<li><a href="#" class="remove">'+ concerts[i] +'</a></li>');
    }
  }
  });
})

// drop functionality
$('.myAdds').on('click', '.remove', function() {

    var self = this;
  $.ajax({
    url:'/apis/remove',
    type:'post',
    data: {
      event:  self.text,
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
      $('.myAdds').append('<li><a href="#" class="remove">'+ concerts[i] +'</a></li>');
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
        $('.myAdds').append('<li><a href="#" class="remove">'+ concerts[i] +'</a></li>');
      }

    }
  });
});

$('.logout').click(function() {

  var self = this;
  $.ajax({
    url:'/apis/logout',
    type:'get',
    data: {},
    error: function(error) {
      console.log(error);
      alert(error);
    },
    success: function(data) {
      console.log('worked')

      }

  });
  location.reload();
});
