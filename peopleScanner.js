$(function() {
    var $cards = $('#people-card');
    if ($cards.length) {
	// trigger initial fix
	fixCards($cards.find('.card:not(.fixed)'));

	// watch for infinite scroll additions
	$(document).bind('DOMNodeInserted', function(e) {
	    var $n = $(e.target);
	    if ($n.hasClass('card')) {
		fixCards($cards.find('.card:not(.fixed)'));
	    }
	});
    }

    function fixCards($cards) {
      $cards.addClass('fixed').css({ marginRight: 0, width: '100%' });
    }
});
