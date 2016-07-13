
var dataObject = {};

$('.concertClick').click(function(){
  $('.myAdds').append('<li>'+ this.text +'</li>')
  var eventName = this.text;

  dataObject.event = this.text;

  $.ajax({
  url:'/apis/add',
  type:'post',
  data: dataObject,
  error: function(error) {
    console.log(error);
  },
  success: function(data) {
    return data;
    }

  })
})
