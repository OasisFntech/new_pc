(function($){

	$(document).ready(function(){

		$('.copy-link').click(function(e){ 
	        e.preventDefault();
	        var url = jQuery(this).attr('href');
	        copyToClipboard(url); 
	    });

	    function copyToClipboard(text) {
		    
		    if (window.clipboardData && window.clipboardData.setData) {
		        // IE specific code path to prevent textarea being shown while dialog is visible.
		        alert('Url Copied!');
		        return clipboardData.setData("Text", text); 
		    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
		        var textarea = document.createElement("textarea");
		        textarea.textContent = text;
		        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
		        document.body.appendChild(textarea);
		        textarea.select();
		        try {
		        	alert('Url Copied!');
		            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
		        } catch (ex) {
		        	alert('Sorry, Copy to clipboard failed!');
		            console.warn("Copy to clipboard failed.", ex);
		            return false;
		        } finally {
		            document.body.removeChild(textarea);
		        }
		    }
		}
		
	});
	
})(jQuery);