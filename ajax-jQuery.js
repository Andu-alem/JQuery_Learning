$(document).ready(function(){
// jQuery - AJAX Introduction  [AJAX = Asynchronous JavaScript and XML]
 // AJAX - is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page

 	//jQuery load() method
 	// load() - loads data from a server and puts the returned data into the selected element

 		//$(selector).load(URL,data,callback);
 			// the required URL parameter specifies the URL you wish to load
 			//data [optional parameter]- specifies a set of querystring key/value pairs to send along with the request
 			// callback [optional parameter] - is the name of a function to be executed after the load() method is completed

 			$("#div1").load("demo_test.txt");//loads the content of "demo_text.txt" into a specific <div> element
 			$("#div1").load("demo_test.txt #p1");//loads the content of the element with id="p1", inside the file "demo_text.txt", into a specific <div> element
 			$("button").click(function(){
 				$("#div1").load("demo_test.txt",function(responseTxt, statusTxt, xhr){
 					//inside callback function
 					if(statusTxt == "success"){
 						alert("content loaded successfully!");
 					}
 					if(statusTxt == "error"){
 						alert("Error: "+ xhr.status + ": "+ xhr.statusText);
 					}
 				});
 			});

// commonly used methods for a request-response b/n a client and server are: GET and POST
   //GET -- requests data from a specified resource ,,,, POST - submits data to be processed to a specified resource

  //jQuery $.get() method -- requests data from a server with an HTTP GET request
  	 	//$.get(URL, callback); // callback [optional] - the name of a func. to be executed if the request succeeds

  	 	$.get("demo_test.php", function(data, status){
  	 		//inside a callback function
  	 		// data [first parameter]- holds the content of the page requested
  	 		alert("Data: "+ data + "\nStatus: "+ status);
  	 	});

   //jQuery $.post() method -- requests data from a server with an HTTP POST request
  	 	//$.post(URL, data, callback); // callback [optional] - the name of a func. to be executed if the request succeeds
  	 	                               // data [optional parameter] - specifies some data to send along with the request

  	    $("button").click(function(){
  	    	$.post("demo_test.php",
  	    	{
  	    		name: "andualem ",
  	    		city: "Edenberg"
  	    	},
  	    	function(data, status){
  	    		alert("Data : "+ data + "\n status:"+ status);
  	    	});
  	    });

  //jQuery $.getJSON() method - 
  		//  $.getJSON(URL, [data], [callback]); 
  						// URL : the url of the server-side resource contacted via the GET method

  					$("#btnJson").click(function(event){
                /* //alternatively we can use fetch to request promises
                   fetch('http://localhost/names.php').then(response => response.json()).then(jd => {
                            $('#divJsn').html('<p> Name: ' + jd.name + '</p>');
                             $('#divJsn').append('<p> Age: ' + jd.age + '</p>');
                             $('#divJsn').append('<p> Sex: ' + jd.sex + '</p>');
                           })*/
              //ajax request
              setInterval(function(){
                $.getJSON('http://localhost/names.php', function(jd){
                  $("#divJsn").empty(); 
                  for (item in jd){
                    $('#divJsn').append('<p>'+item+': '+jd[item]+ '</p>')
                  }
                /*$('#divJsn').html('<p> Name: ' + jd.name + '</p>');
                $('#divJsn').append('<p> Age: ' + jd.age + '</p>');
                $('#divJsn').append('<p> Sex: ' + jd.sex + '</p>');*/
              });
              },5000)
  					});

});