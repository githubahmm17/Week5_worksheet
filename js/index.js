var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);

}


// device APIs are available
//
    function onDeviceReady() {
	

	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


