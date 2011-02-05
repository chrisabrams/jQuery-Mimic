(function($) {
	$.fn.mimic = function(options) {	
		
		var defaults = {
			delegate: '', //The container that houses the input that we will be mimiced
			mimic: '',    //The element that will receive/show the mimic
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

			  	$(options.mimic).text(value); //Send the value to the mimic element
			});
			
		});
	};
})(jQuery);