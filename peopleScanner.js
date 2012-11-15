(function () {

	/**
     * Dynamically load jQuery with callback.
     */
    function loadScript(url, callback) {
        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

	// load jquery and plugin
    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js", function () {
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
})();
