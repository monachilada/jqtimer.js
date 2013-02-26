jqtimer.js
==========

Javascript Timer convenience plugin for jQuery.

Usage
=====

$('#id').startTimeout(function() {
	//Do stuff
}, 1000);

$('#id').killTimeout();

$('#id').startInterval(function() {
	//Do stuff
}, 1000);

$('#id').killInterval();