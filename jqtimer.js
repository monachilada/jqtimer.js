jQuery.fn.extend({
	startTimeout: function($function, $interval){
		$(this).each(function() {
			this.jqtimeout = setTimeout($function, $interval);
		})
	},
	killTimeout: function() {
		$(this).each(function() {
			clearTimeout(this.jqtimeout);
		})
	},
	startInterval: function($function, $interval) {
		$(this).each(function(){
			this.jqinterval = setInterval($function, $interval);
		})
	},
	killInterval: function() {
		$(this).each(function() {
			clearInterval(this.jqinterval);
		});
	}
});