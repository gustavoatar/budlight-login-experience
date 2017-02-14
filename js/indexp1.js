
var final_transcript = '';
var recognizing = false;

if ('webkitSpeechRecognition' in window) {

  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() {
    recognizing = true;
    jQuery(); 
  };

  recognition.onerror = function(event) {
    console.log(event.error);
  };

  recognition.onend = function() {
    recognizing = false;
  };

  recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {              
        final_transcript += event.results[i][0].transcript;
      } else {    
        interim_transcript += event.results[i][0].transcript;       
      }     
    }           
    final_transcript = linebreak(final_transcript);
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript);   
  };
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

function capitalize(s) {
  return s.replace(s.substr(0,1), function(m) { return m.toUpperCase(); });
}

function startDictation(event) {
  jQuery('.wave-form').removeClass('hide').addClass('fadeIn')
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.lang = 'en-US';
  recognition.start();
  final_span.innerHTML = '';
  interim_span.innerHTML = '';
}



jQuery(window).scroll(function(){
	var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
	var scrolltrigger = 0.95;
	var percentageScrolled= (wintop/(docheight-winheight))*(100);

	console.log('wintop='+wintop);
	console.log('docheight='+docheight);
	console.log('winheight='+winheight);
	console.log(wintop+'=='+(docheight-winheight));
	console.log(wintop==(docheight-winheight));
	console.log(percentageScrolled);

// 	if (percentageScrolled >= 18) {
// 		$(".holder-canvas").addClass('grow');
// 		$("#expand").addClass('hide hidemobile');	
// 		$("#collapse").removeClass('hide hidemobile');
// 	} else if(percentageScrolled < 18){
// 		$(".holder-canvas").removeClass('grow');
// 		$("#expand").removeClass('hide hidemobile');	
// 		$("#collapse").addClass('hide hidemobile');	
// 	}
}); 
jQuery(document).ready(function($){

	jQuery.get( 'locator-feature-p1.html', function( data ) {
		  jQuery( '.locator' ).html( data );
	});	
	jQuery('.numbers-only').keyup(function () {  
		this.value = this.value.replace(/[^0-9\.]/g,''); 
		
	});		
	jQuery('.beer-pass-highlight').on('click', function(){
		jQuery('.beer-pass-highlight i').toggleClass('contract');
		jQuery('.beer-pass-highlight i').toggleClass('hide');
		jQuery('footer').toggleClass('grow');
	});

	jQuery('.register').on('click', function(){
		jQuery('.age-gate').addClass('fadeOutUp').remove();
		jQuery('.entry').addClass('fadeOutUp').remove();
		jQuery('footer.memberfooter').removeClass('hide').addClass('fadeIn');	
		jQuery('nav').removeClass('hide').addClass('slideInDown');	
		jQuery('.member-beer').removeClass('hide');
		jQuery('.locator').removeClass('hide').addClass('fadeIn');	
		jQuery('.pencil').addClass('hide').addClass('fadeOutUp');	
				
		//I'm not doing anything else, so just leave
			if(!navigator.geolocation) return;
	
			navigator.geolocation.getCurrentPosition(function(pos) {
				geocoder = new google.maps.Geocoder();
				var latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
				geocoder.geocode({'latLng': latlng}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						//Check result 0
						var result = results[0];
						//look for locality tag and administrative_area_level_1
						var city = "";
						var state = "";
						for(var i=0, len=result.address_components.length; i<len; i++) {
							var ac = result.address_components[i];
							if(ac.types.indexOf("locality") >= 0) city = ac.long_name;
							if(ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
						}
						//only report if we got Good Stuff
						if(city != '' && state != '') {
							jQuery(".loader").addClass('fadeOut').addClass('hide');
							jQuery(".result").html(""+city+", "+state+"");
						}
					} 
				});
	
			});		
	});
	jQuery('.guest-entry').on('click', function(){
		jQuery('.register-user').removeClass('hide')		
		jQuery('.user-name').addClass('hide')		
		jQuery('.guest-beer').removeClass('hide');	
		jQuery('.age-gate').addClass('fadeOutUp').remove();
		jQuery('.entry').addClass('fadeOutUp').remove();
		jQuery('.pick-your-emoji').addClass('hide');
		jQuery('.sign-up-emoji').removeClass('hide');
		jQuery('footer.guestfooter').removeClass('hide');
		jQuery('nav').removeClass('hide').addClass('slideInDown');	
		jQuery('.locator').removeClass('hide').addClass('fadeIn');	
		jQuery('.pencil').addClass('hide').addClass('fadeOutUp');	
		//I'm not doing anything else, so just leave
			if(!navigator.geolocation) return;
	
			navigator.geolocation.getCurrentPosition(function(pos) {
				geocoder = new google.maps.Geocoder();
				var latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
				geocoder.geocode({'latLng': latlng}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						//Check result 0
						var result = results[0];
						//look for locality tag and administrative_area_level_1
						var city = "";
						var state = "";
						for(var i=0, len=result.address_components.length; i<len; i++) {
							var ac = result.address_components[i];
							if(ac.types.indexOf("locality") >= 0) city = ac.long_name;
							if(ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
						}
						//only report if we got Good Stuff
						if(city != '' && state != '') {
							jQuery(".loader").addClass('fadeOut').addClass('hide');
							jQuery(".result").html(""+city+", "+state+"");
						}
					} 
				});
	
			});		
	});	
   jQuery('.year-entry').keyup(function(){
        if(this.value.length==$(this).attr("maxlength")){
            $(this).next().focus();
        }
    });
	jQuery('.final').bind("DOMSubtreeModified", function() {
		var voiceInput = final_span.innerHTML;
			jQuery('.year-entry').val(voiceInput.replace(/[^\d.-]/g, ''));
			jQuery('.year button').removeClass('hide').addClass('fadeIn')
		if (voiceInput.indexOf('go') !== -1) {
			jQuery('.guest-entry').trigger('click');
		}  	
			
	});
	var colors = ['#0042b2', '#171387', '#99b3e0', '#149be4'],
		color;

	jQuery('.members').click(function() {
		var randColor;
		do {
		  randColor = colors[Math.floor(Math.random() * colors.length)];
		} while (color == randColor);
		jQuery('.members').css('background-color', randColor);
		color = randColor;
	});

	jQuery('.dropdown').click(function() {
		jQuery(this).toggleClass('open');
	});

});


