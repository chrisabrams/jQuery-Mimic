(function($) {
	$.fn.mimic = function(options) {	
		
		var defaults = {
			delegate: '', //The container that houses the input that we will be mimiced
			mimic: '',    //The element that will receive/show the mimic
			input: false, //Is the mimic element an input?
			regexp: false //Only use regular expressions such as converting " " to "-"
		};
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			var input = '#' + $(this).attr('id'); //Get the ID of the input the plugin was attached to
			
			$(options.delegate).delegate(input, 'keyup', function() {
			  	var value = $(this).val(); //Get the value of the input
			  	if(options.regexp == true) { //Are regular expressions being used?
			  		value = value.replace(new RegExp("\\s", "g"), "-"); //Replace all " " with "-"
			  	}
				if(options.input == true) {//If mimic is an input
					$(options.mimic).attr('value',value)
				} else {//If input is a container such as a div or span
					$(options.mimic).text(value); //Send the value to the mimic element
				}	  	
			});
			
		});
	};
})(jQuery);