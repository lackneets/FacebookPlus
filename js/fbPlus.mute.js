$.wait('#jewelContainer:not(.fbPlusUI)', function(){
	var container = $(this).addClass('fbPlusUI');
	$.wait('audio', function(){
		var audio = $(this).get(0);
		var switchMute = $('<div class="switchMute fbJewel"/>').appendTo(container);
		var ls = localStorage, au = $('audio').get(0);
		if(typeof ls.fbp_muted == undefined) ls.fbp_muted = 'false';
		checkMuteStatus();
		
		function checkMuteStatus(){
			au.muted = (ls.fbp_muted == 'true' ? true : false);
			switchMute.removeClass('mute unmute on off').addClass(au.muted ? 'off' : 'on');
		}
		setInterval(checkMuteStatus, 500);
		
		switchMute.click(function(){
			au.muted = (ls.fbp_muted == 'true' ? false : true);
			if(!au.currentSrc){
				au.src = 'http://static.ak.fbcdn.net/rsrc.php/yy/r/odIeERVR1c5.mp3';
				au.load();
			} 
			if(au.currentTime) au.currentTime = 0;
			au.play(0);
			ls.fbp_muted = au.muted;
			$(this).removeClass('mute unmute on off').addClass(au.muted ? 'off' : 'on');
		});
	});
});