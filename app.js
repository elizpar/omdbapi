

$(function(){

  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    
    $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data){
    var myData = data.Search;
    showResults(myData);
    console.log(myData);
  

  	function showResults(results){
	    for (var i = 0; i < data.Search.length; i++) {
         $('.search-results').append('<span>' + data.Search[i].Title + '</span><br>');
         console.log(data.Search[i].Title);
	    };
    	}
      });
});

  
});