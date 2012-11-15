(function () {

	/**
     * Dynamically load jQuery with callback.
     */
    function loadScript(url, callback) {
        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

	/**
     * After loading jQuery, handle plugin.
     */
    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js", function () {
        var $cardWrapper = $('#pymk-people-card');
	    if ($cardWrapper.length) {
    		// trigger initial fix
    		fixCards($cardWrapper.find('.card:not(.fixed)'));
    	
    		// watch for infinite scroll additions
    		$(document).bind('DOMNodeInserted', function(e) {
    		    var $n = $(e.target);
    		    if ($n.hasClass('card')) {
    			    fixCards($cardWrapper.find('.card:not(.fixed)'));
    		    }
    		});
	    }
	
	    function fixCards($cards) {
            var $cardContainer = $cards.find('.vcard-container'),
                $body = $cardContainer.find('.vcard-body');

            $body.css('height', '60px');
            $body.find('> p, > span').css({ 'max-width': '100%' });
            $cardContainer.find('.photo img').css({ height: '55px', width: '55px' });
            $cardContainer.css('height', '103px');
            $cardContainer.css({
                width: '100%',
                height: '103px',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                WebkitBoxSizing: 'border-box'
            });
            $cards.addClass('fixed').css({ marginRight: 0, width: '100%', height: '103px' });
	    }
    });
})();
