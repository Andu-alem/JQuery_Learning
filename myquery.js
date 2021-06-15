$(document).ready(function(){
			var pars = $("p");
			var li = $("ul > li");
			var pMyclass = $("p.myclass");
			var ul = $("p ~ ul li:first");
			alert(ul[0].innerHTML);
			//alert(pMyclass[0].innerHTML);
			var ell = $("p:empty");
 			//alert(ell.length);
			//var links = $("//p//a");
		    
		    //adding innerHtml (text) to div element
		    $("#divv").text("hello andi in div");


		    //$("#divv").addClass("divselected");
			for( i=0; i<ell.length; i++){
				//ell.innerHTML = "hello andi from the jquery";
				//alert("found element: "+ ell[i].innerHTMl);
				//alert("found paragraph: "+ pars[i].innerHTML);
	            //alert("found list: "+ li[i].innerHTML);
			}

          //resize event
		          $(window).resize(function(){
		          	 if($(window).width() > 800){
		          	 	alert($(window).width());
		          	 };
		          	//alert("window is resizing");
		          });
		  // scroll event 
		  		$(window).scroll(function(){
		  			//alert("Scrolling");
		  		});

			//show and hide event methods
			var x = 0;
			$("#showhide").click(function(){
				//$(this).hide();
				//$("#hidediv").hide();
				if(x==1)
				{
					$("#hidediv").show();
					x = 0;
				}else{
					$("#hidediv").hide();
					x = 1;
				}
			});

			//hide when doubleclick the element using dblclick method
			$("#hidediv").dblclick(function(){
				//$(this).hide();

				//using $(selector).hide(speed,callback)
				$(this).hide(1000,hideCallback);

			});

			function hideCallback(){
				    alert("HideDiv element is now hideen");
				}

			/*
			//mouseenter event method
			$(".paradiv").mouseenter(function(){
				alert("you enterd in paradiv region");
			});

			//mouseleave event method
			$(".paradiv").mouseleave(function(){
				alert("Bye Bye bro");
			});
			//mouseout event method
			$(".paradiv").mouseout(function(){
				alert("you out from paradiv region");
			});
			*/

			//Hover event method (mouseenter and mouseleave)
			$(".paradiv").hover(function(){
				//alert("you entered tthe div region");
				$(this).css("background-color","gray");
			}, 
			function(){
				//alert("Bye! You leave div region");
				$(this).css("background-color","orange");
			});


			//focus event mehtod
			$("input").focus(function(){
				$(this).css("background-color", "#ffffff");
			});

			//blur event method
			$("input").blur(function(){
				$(this).css("background-color", "#cccccc");
			});


			//Using on method for multiple events
			$("#divv").on({

				mouseenter: function(){
					$(this).css("background-color", "lightgray");
				},
				mouseleave: function(){
					$(this).css("background-color", "lightblue");
				},
				click: function(){
					$(this).css("background-color", "yellow");
				}
			});

			// using toggle() method to show and hide
			$("button:first").click(function(){
				//$(selector).toggle(speed,callback);
				$("#listdiv").toggle("slow");
			});

			//using fadeIn(), fadeOUt(), fadeToggle() and fadeTo() methods for fadeing effect
			$("#fadebutton1").click(function(){
				//$(selector).fadeOut(speed);
				$("#parafade").fadeOut("3000");
			});

			$("#fadebutton2").click(function(){
				//$(selector).fadeIn(speed);
				$("#parafade").fadeIn("3000");
			});

			$("#fadebutton3").click(function(){
				//$(selector).fadeToggle(speed);
				$("#parafade").fadeToggle("slow");
			});

			$("#fadebutton4").click(function(){
				// $(selector).fadeTo(speed,opacity,callback)
				$("#parafade").fadeTo("slow", 0.15);
			});

			//using slideUp(), slideDown() and slideToggle() methods for sliding effects
			//$(selector).slideUp(speed, callback)
			$("#slide1").click(function(){
				$("#slidepara").slideUp(3000);
			});

			$("#slide2").click(function(){
				$("#slidepara").slideDown("slow");
			});

			$("#slide3").click(function(){
				$("#slidepara").slideToggle();
			});


			//Animation Effect
			$("#aninput").focus(function(){
				$(this).animate({width: '70%'},'slow');
			});

			$("#aninput").blur(function(){
				$(this).animate({width: '35%'},2000);
			});

			$("#btnAnimate").click(function(){
				$(this).css("position","relative");
				$(this).animate({
					left: '300px',
				    width: '100px',
				    opacity: '0.9'},2000,function(){
                        $(this).css("background-color","lightgreen");
				    });
			});

		   $("#btnAnimate2").click(function(){
				$(this).css({"position":"relative","background-color":"red"});
				$(this).animate({
					left: '300px',
				    width: '+100px',
				    //height: "toggle", lor height: 'show'
				    height: 'hide',
				    opacity: '0.9'},2000,function(){
                        $(this).css("background-color","lightgreen");
				    });
			});

		  //using Queue functionality
		  $("#btnAnimate3").click(function(){
			    var div = $(this);
			    div.animate({height: '300px', opacity: '0.4'}, "slow");
			    div.animate({width: '300px', opacity: '0.8'}, "slow");
			    div.animate({height: '100px', opacity: '0.4'}, "slow");
			    div.animate({width: '100px', opacity: '0.8'}, "slow");
			}); 

		  $("#divAnimate").css({
		   	"background-color":"brown",
		    "width":'60px',
		    "height": '60px',
		    "position": 'relative'});
		  $("#divAnimate").click(function(){
			    //using Jquery Method Chainning 
			    $(this).animate({left: '100px', opacity: '0.7'}, "slow")
			    .animate({top: '100px', opacity: '0.8'}, "slow")
			    .animate({left: '0px', opacity: '0.9'}, "slow")
			    .animate({top: '0px', opacity: '1'}, "slow");
			}); 

       //get text, html, or value(val()) contents
		  $("#btn1").click(function(){
			        alert("Text: " + $("#test").text());
			        alert("Attribute Id: "+ $("#test").attr("id"));
			    });
		  $("#btn2").click(function(){
			        alert("HTML: " + $("#test").html());//returns html
		    });

		  //set text, html, value(val()), attribute(attr())
		  $("#btn3").click(function(){
		  	  $("#test").text(function(index, originalText){
		  	  	 return "Old Text: "+ originalText + " And New text: using callback in text/html "+ "(index:"+ index +")";
		  	  	});
		  });

		  $("#attrPara").click(function(){
		  	  $(this).attr("href", "hello.html");
		  	  $(this).attr({
		  	  	"title": "Jqueryy",
		  	  	"name": "parag"
		  	  });
		  });
		  //set attribute[attr()] using callback function
		  $("attrPara").click(function(){
			    $(this).attr("href", function(i, origValue){
			        return origValue + "/jquery"; 
			    });
			});

// Adding Element (Html Content)
			
			$("#addElDiv").append("<p> Some <b>appended</b> text(paragraph). </p>");
			$("#addElDiv").prepend("<p> Some <b>prepended</b> text(paragraph). </p>");

			//adding several element
			//self invoking function
			(function append(){
				var txt1 = "<p>Text one //create text with HTML</p>";//create text with HTML
				var txt2 = $("<p></p>").text("Text two //create text with jQuery");//create text with jQuery 
				var txt3 = document.createElement("p");
				txt3.innerHTML = "Text three //Create text with DOM";//Create text with DOM
				$("#addElDiv").append(txt1, txt2, txt3); //Appended new Elements
			})();

			$("#addElDiv h2").before("Some text <b>Before</b> Header");
			$("#addElDiv h2").after("Some text <b>After</b> Header");

//removing elemnts
		/*
			//remove selected element (and its child elements)
			$(selector).remove();
			//accept one parameter to filter the elements to be Removed
			$(selector).remove(".test, .demo , #test");
			// remove the child elements from the selected element
			$(selector).empty();
		*/

// jQuery Manipulating CSS
			$("#addElDiv h2").addClass("cssDiv");
			//$("#addElDiv h2").removeClass("cssDiv");
			//$("#addElDiv h2").toggleClass("cssDiv");
		//adding class for multiple elements
			$("#btn1, #btn2, #btn3").addClass("cssDiv");

// jQuery dimensions
            //getting width and height excluding(padding, margin, and border)
			alert("the width and height of button3 is: "+$("#btn3").width()+" and "+$("#btn3").height());
			//setting width and height excluding(padding, margin, and border)
			$("#btn3").width(100).height(30);

		//To include padding use
			  //$(selector).innerWidth().innerHeight()

		//To include padding and border
			 // the outerWidth and outerHight sets and returns width and hight
			  // $(selector).outerWidth().outerHeight()


	   //To include padding, border, and margin
	          // $(selector).outerWidth(true).outerHeight(true)

//get the browser(window) and document(HTML document) width and hight
  		var doc = "The document width = " + $(document).width() + " and hight = " + $(document).height();
  		var wind = "The Window(browser viewport width = "+$(window).width()+ " and height = "+ $(window).height(); 
  		$("#dimension").append(doc+"<br>"+wind);


 // Form submittion

        $("#form").submit(function(){
        	alert($("#frmInp").val());
        });


// jQuery Traversing - Ancestors
// Ancestors is a parent, grandpa.., great-grandpa.., and so on
		//three useful methods  parent(), parents(), and parentsUntil()
		var parent = $("#form").parent();
		var parents = $("#form").parents();
		alert("Parent: "+parent[0].innerHTML + " and Parents : "+ parents);

// jQuery Traversing - Descendants
// a descendant is a child, grandchild, great-grandchild, and so on.
     // Two useful methods children() and find()
       //children() - returns all direct children of the selected element abd only traverse a single level down in the dom tree.
        var child = $("#form").children();
           //var child = $("div").children("p:first");
        var findChild = $("#form").find();
           //var findChild = $("div").find("span");
           //var findchild = $("div").find("*");//returns all descendants

// jQuery Traversing - Siblings
	// Siblings share the same parent
	// useful methods - siblings(), next(), nextAll(), nextUntil(), prev(), prevAll(), and prevUntil()
			var allSiblings = $("h3").siblings();//return all siblings
			var paragSibling = $("h3").siblings("p");
			var next = $("h3").next();//return next sibling
			var allNext = $("h3").nextAll();//return all next siblings
			var untilNext = $("h3").nextUntil("h5");//return all next siblings until <h5>


			var previous = $("h3").prev();// return previous sibling
			var allPrev = $("h3").prevAll();// return all previous siblings
			var untilPrev = $("h3").prevUntil("h1");// return all previous siblingsuntil <h1> 

// jQuery Traversing - Filtering
	//Three most basic filtering methods -  first(), last() and eq(), w/c allow you to select
	   //.. a specific element based on its postion in a group of elements 
	  
	  // Other filtering methods, like  filter() and not() allow you to select elements that match, or do not match, a certail criteria

	  var first = $("div p").first();//selects the first <p> element inside the first <div> element
	  var last = $("div p").last();//selects the last <p> element inside the last <div> element
 		
 		// eq() - returns an element with a specific index number of the selected elements
 			$("p").eq(1);

 		//filter() - lets you specify a criteria
 			var match = $("p").filter(".intro");// returns all <p> elements with class name ".intro"
 			var notMatch = $("p").not(".intro");// returns all <p> elements that do not have class name ".intro"

// jQuery - AJAX Introduction  [AJAX = Asynchronous JavaScript and XML]
 // AJAX - is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page
//......

});