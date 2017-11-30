$(function() {
    
  $("#quote").text(JSON.stringify(samplequote, null, 2));
     
  $('form').submit(function(event) {
    event.preventDefault();

    $.get('/api.quotes/random', function(response) {
      //console.log(response);      
      $("#quote").text(JSON.stringify(response, null, 2));
    });
  });
    
});


var samplequote = {
    "_id": {
        "$oid": "5a1ea59b16db4f1a7da7e053"
    },
    "quoteText": "Self-complacency is fatal to progress.",
    "quoteAuthor": "Margaret Sangster"
}
