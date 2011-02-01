(function($) {
	$.fn.mimic = function(options) {	
		
		var defaults = {
			mimic: '#mimic',
			speed: 1000
		};
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			var input = '#' + $(this).attr('id');

			var typewatch = (function() {
				var timer = 0;
				return function(callback, ms) {
					clearTimeout (timer);
					timer = setTimeout(callback, ms);
				}  
			})();
			
			$(input).keyup(function() {
				typewatch(function () {
			    	//
			  	}, options.speed);
			  	$(options.mimic).text($(input).val());
			});
			
		});
	};
})(jQuery);