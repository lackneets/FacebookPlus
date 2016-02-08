$.wait('#blueBar:not(:has(.fbPlusClock))', function(){
	$("<link href='http://fonts.googleapis.com/css?family=Russo+One' rel='stylesheet' type='text/css'>").appendTo('body');
	var clock = $('<div class="fbPlusClock" style="font-family: \'DS Digital\', sans-serif;"/>').text('').insertBefore($(this).find('#pageNav'));

	function updateTime(){
		clock.text(((new Date()).getSeconds() % 2 == 0) ? date('G:i') : date('G i') );
		clock.attr({
			'aria-label' : date('Y/m/d l'),
			'data-hover' : 'tooltip', 'data-tooltip-alignh' : 'center'
		});
	}
	updateTime();
	setInterval(updateTime, 1000);
});

$.wait('#blueBar:not(:has(.fbPlusVersion))', function(){
	$('<a class="fbPlusVersion" target="_fbPlusAuthor" />').text(manifest('name') + ' v' + manifest('version')).attr('href', 'http://www.facebook.com/lackneets' ).appendTo($(this).find('#pageHead'));
});
/*
$.ajax({
	url: 'https://docs.google.com/forms/d/1nE-SF3hI3KdQexbEPfdxcE69IddLaIcjWyWU-zN2818/formResponse',
	type: 'POST', dataType: 'text',
	data: {
		'entry.1594937179': user_id(),
		'entry.632278348': 'test',
		'entry.418056781': manifest('version'),
		'draftResponse' : [],
		'pageHistory' : 0
	},
	success: function(text){
		console.log(text);
	}
})*/