//jQuery extension
$.wait = function(selector, callback, loop, interval){
	if(typeof interval != 'number') interval = 500;
	var i = setInterval(function(){
		if($(selector).length > 0 && typeof callback == 'function'){
			var obj = $(selector);
			if(! loop ) clearInterval(i);
			callback.call(obj, obj);
		} 
	}, interval);
};
$.text = function(el) {
    return $(el).find(":not(iframe)").andSelf().contents().filter(function() {
        return this.nodeType == 3;
    });
};
//取得 manifest 的資料
function manifest(name) {
	var value;
	
	if(! manifest.data ) $.ajax({
		url: chrome.extension.getURL('/manifest.json'),
		dataType: 'json',
		async: false,
		success: function(data){
			manifest.data = data;
		}
	});
	value = manifest.data[name]
	return value;
}

function date(format,timestamp){var that=this,jsdate,f,formatChr=/\\?([a-z])/gi,formatChrCb,_pad=function(n,c){if((n=n+'').length<c){return new Array((++c)-n.length).join('0')+n}return n},txt_words=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"];formatChrCb=function(t,s){return f[t]?f[t]():s};f={d:function(){return _pad(f.j(),2)},D:function(){return f.l().slice(0,3)},j:function(){return jsdate.getDate()},l:function(){return txt_words[f.w()]+'day'},N:function(){return f.w()||7},S:function(){var j=f.j();return j>4&&j<21?'th':{1:'st',2:'nd',3:'rd'}[j%10]||'th'},w:function(){return jsdate.getDay()},z:function(){var a=new Date(f.Y(),f.n()-1,f.j()),b=new Date(f.Y(),0,1);return Math.round((a-b)/864e5)+1},W:function(){var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3),b=new Date(a.getFullYear(),0,4);return _pad(1+Math.round((a-b)/864e5/7),2)},F:function(){return txt_words[6+f.n()]},m:function(){return _pad(f.n(),2)},M:function(){return f.F().slice(0,3)},n:function(){return jsdate.getMonth()+1},t:function(){return(new Date(f.Y(),f.n(),0)).getDate()},L:function(){return new Date(f.Y(),1,29).getMonth()===1|0},o:function(){var n=f.n(),W=f.W(),Y=f.Y();return Y+(n===12&&W<9?-1:n===1&&W>9)},Y:function(){return jsdate.getFullYear()},y:function(){return(f.Y()+"").slice(-2)},a:function(){return jsdate.getHours()>11?"pm":"am"},A:function(){return f.a().toUpperCase()},B:function(){var H=jsdate.getUTCHours()*36e2,i=jsdate.getUTCMinutes()*60,s=jsdate.getUTCSeconds();return _pad(Math.floor((H+i+s+36e2)/86.4)%1e3,3)},g:function(){return f.G()%12||12},G:function(){return jsdate.getHours()},h:function(){return _pad(f.g(),2)},H:function(){return _pad(f.G(),2)},i:function(){return _pad(jsdate.getMinutes(),2)},s:function(){return _pad(jsdate.getSeconds(),2)},u:function(){return _pad(jsdate.getMilliseconds()*1000,6)},e:function(){throw'Not supported (see source code of date() for timezone on how to add support)';},I:function(){var a=new Date(f.Y(),0),c=Date.UTC(f.Y(),0),b=new Date(f.Y(),6),d=Date.UTC(f.Y(),6);return 0+((a-c)!==(b-d))},O:function(){var tzo=jsdate.getTimezoneOffset(),a=Math.abs(tzo);return(tzo>0?"-":"+")+_pad(Math.floor(a/60)*100+a%60,4)},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2))},T:function(){return'UTC'},Z:function(){return-jsdate.getTimezoneOffset()*60},c:function(){return'Y-m-d\\Th:i:sP'.replace(formatChr,formatChrCb)},r:function(){return'D, d M Y H:i:s O'.replace(formatChr,formatChrCb)},U:function(){return jsdate.getTime()/1000|0}};this.date=function(format,timestamp){that=this;jsdate=((typeof timestamp==='undefined')?new Date():(timestamp instanceof Date)?new Date(timestamp):new Date(timestamp*1000));return format.replace(formatChr,formatChrCb)};return this.date(format,timestamp)}

function user_id(){return $('html').html().match(/envFlush\(\{\"user\"\:\"(\d+)/)[1];}
function post_form_id(){return $('input#post_form_id').val();}
function fb_dtsg(){return $('input[name="fb_dtsg"]').val();}



(function($){
	// envFlush({"user":"100000149090290"

var hex = ["#FFCCFF", "#FFCCCC", "#FFCC99", "#FFCC66", "#FFCC33", "#FFCC00",
"#FF99FF", "#FF99CC", "#FF9999", "#FF9966", "#FF9933", "#FF9900",
"#FF66FF", "#FF66CC", "#FF6699", "#FF6666", "#FF6633", "#FF6600",
"#FF33FF", "#FF33CC", "#FF3399", "#FF3366", "#FF3333", "#FF3300",
"#FF00FF", "#FF00CC", "#FF0099", "#FF0066", "#FF0033", "#FF0000",
"#CCFFFF", "#CCFFCC", "#CCFF99", "#CCFF66", "#CCFF33", "#CCFF00",
"#CCCCFF", "#CCCCCC", "#CCCC99", "#CCCC66", "#CCCC33", "#CCCC00",
"#CC99FF", "#CC99CC", "#CC9999", "#CC9966", "#CC9933", "#CC9900",
"#CC66FF", "#CC66CC", "#CC6699", "#CC6666", "#CC6633", "#CC6600",
"#CC33FF", "#CC33CC", "#CC3399", "#CC3366", "#CC3333", "#CC3300",
"#CC00FF", "#CC00CC", "#CC0099", "#CC0066", "#CC0033", "#CC0000",
"#99FFFF", "#99FFCC", "#99FF99", "#99FF66", "#99FF33", "#99FF00",
"#99CCFF", "#99CCCC", "#99CC99", "#99CC66", "#99CC33", "#99CC00",
"#9999FF", "#9999CC", "#999999", "#999966", "#999933", "#999900",
"#9966FF", "#9966CC", "#996699", "#996666", "#996633", "#996600",
"#9933FF", "#9933CC", "#993399", "#993366", "#993333", "#993300",
"#9900FF", "#9900CC", "#990099", "#990066", "#990033", "#990000",
"#66FFFF", "#66FFCC", "#66FF99", "#66FF66", "#66FF33", "#66FF00",
"#66CCFF", "#66CCCC", "#66CC99", "#66CC66", "#66CC33", "#66CC00",
"#6699FF", "#6699CC", "#669999", "#669966", "#669933", "#669900",
"#6666FF", "#6666CC", "#666699", "#666666", "#666633", "#666600",
"#6633FF", "#6633CC", "#663399", "#663366", "#663333", "#663300",
"#6600FF", "#6600CC", "#660099", "#660066", "#660033", "#660000",
"#33FFFF", "#33FFCC", "#33FF99", "#33FF66", "#33FF33", "#33FF00",
"#33CCFF", "#33CCCC", "#33CC99", "#33CC66", "#33CC33", "#33CC00",
"#3399FF", "#3399CC", "#339999", "#339966", "#339933", "#339900",
"#3366FF", "#3366CC", "#336699", "#336666", "#336633", "#336600",
"#3333FF", "#3333CC", "#333399", "#333366", "#333333", "#333300",
"#3300FF", "#3300CC", "#330099", "#330066", "#330033", "#330000",
"#00FFFF", "#00FFCC", "#00FF99", "#00FF66", "#00FF33", "#00FF00",
"#00CCFF", "#00CCCC", "#00CC99", "#00CC66", "#00CC33", "#00CC00",
"#0099FF", "#0099CC", "#009999", "#009966", "#009933", "#009900",
"#0066FF", "#0066CC", "#006699", "#006666", "#006633", "#006600",
"#0033FF", "#0033CC", "#003399", "#003366", "#003333", "#003300",
"#0000FF", "#0000CC", "#000099", "#000066", "#000033", "#000000",
"#000001", "#00008B", "#0000CD", "#0000EE", "#00562D", "#00688B",
"#008080", "#00868B", "#008B00", "#008B45", "#008B8B", "#00938F",
"#009ACD", "#00A6A6", "#00AF14", "#00B2EE", "#00BFFF", "#00C5CD",
"#00CD00", "#00CD66", "#00CDCD", "#00D2D2", "#00E5EE", "#00EEEE",
"#00EE00", "#00EE76", "#00F5FF", "#00FF7F", "#104E8B", "#1874CD",
"#19CCDF", "#1C86EE", "#1E90FF", "#20B2AA", "#222298", "#232375",
"#238E23", "#27408B", "#2E8B57", "#2F2F64", "#2F4F4F", "#3232CC",
"#32814B", "#32BFC1", "#32D838", "#347766", "#36648B", "#384B66",
"#3A5FCD", "#4169E1", "#41AC41", "#436EEE", "#43CD80", "#458B00",
"#473C8B", "#4876FF", "#4A708B", "#4B0082", "#4EEE94", "#4F94CD",
"#509F69", "#528B8B", "#529584", "#53868B", "#5470AA", "#54FF9F",
"#551A8B", "#55562F", "#568B74", "#5CACEE", "#5D478B", "#5F929E",
"#548B54", "#607B8B", "#63B8FF", "#668B8B", "#66CD00", "#66CDAA",
"#68228B", "#68838B", "#6959CD", "#696969", "#698B22", "#698B69",
"#6A6A8D", "#6B3939", "#6B8E23", "#6E7B8B", "#6E8B3D", "#708090",
"#729FFF", "#73DE78", "#76EE00", "#76EEC6", "#778899", "#79CDCD",
"#7A378B", "#7A67EE", "#7A8B8B", "#7AC5CD", "#7C98D3", "#7CCD7C",
"#7CFC00", "#7D26CD", "#7E88AB", "#7EC0EE", "#7FFF00", "#7FFFD4",
"#808080", "#836FFF", "#838B83", "#838B8B", "#8470FF", "#87CEFA",
"#87CEFF", "#8968CD", "#8A2BE2", "#8B0000", "#8B008B", "#8B0A50",
"#8B008B", "#8B1A1A", "#8B1C62", "#8B208B", "#8B2252", "#8B2323",
"#8B2500", "#8B3A3A", "#8B3A62", "#8B3E2F", "#8B3626", "#8B4500",
"#8B4513", "#8B4726", "#8B475D", "#8B4789", "#8B4C39", "#8B5742",
"#8B5A00", "#8B5A2B", "#8B5F65", "#8B636C", "#8B6508", "#8B668B",
"#8B6914", "#8B6969", "#8B7355", "#8B7500", "#8B7765", "#8B795E",
"#8B7B8B", "#8B7E66", "#8B7D6B", "#8B7D7B", "#8B814C", "#8B8378",
"#8B8386", "#8B864E", "#8B8682", "#8B8878", "#8B8970", "#8B8989",
"#8B8B00", "#8B8B7A", "#8B8B83", "#8DB6CD", "#8DEEEE", "#8E2323",
"#8EE5EE", "#8F0052", "#8FBC8F", "#90EE90", "#90EE90", "#912CEE",
"#9370DB", "#9400D3", "#96522D", "#96CDCD", "#97FFFF", "#98F5FF",
"#9A32CD", "#9AC0CD", "#9ACD32", "#9AFF9A", "#9B30FF", "#9BCD9B",
"#9C3ECE", "#9F79EE", "#9FB6CD", "#A020F0", "#A2B5CD", "#A2CD5A",
"#A4D3EE", "#A52A2A", "#A9A9A9", "#AB82FF", "#ADFF2F", "#AEEEEE",
"#AFEEEE", "#B0E0E6", "#B0E2FF", "#B23AEE", "#B2DFEE", "#B3B37E",
"#B3EE3A", "#B452CD", "#B4CDCD", "#B4EEB4", "#B8860B", "#B9D3EE",
"#BBFFFF", "#BC8F8F", "#BCD2EE", "#BCEE68", "#BD52BD", "#BDB76B",
"#BF3EFF", "#BFEFFF", "#C0C0C0", "#C0FF3E", "#C1CDC1", "#C1CDCD",
"#C1FFC1", "#C5489B", "#C6E2FF", "#CAE1FF", "#CAFF70", "#CD0000",
"#CD00CD", "#CD1076", "#CD2626", "#CD2990", "#CD3333", "#CD3700",
"#CD4F39", "#CD5555", "#CD5B45", "#CD6090", "#CD6600", "#CD661D",
"#CD6839", "#CD6889", "#CD69C9", "#CD7054", "#CD8162", "#CD8500",
"#CD853F", "#CD8C95", "#CD919E", "#CD950C", "#CD96CD", "#CD9B1D",
"#CD9B9B", "#CDAA7D", "#CDAD00", "#CDAF95", "#CDB38B", "#CDB5CD",
"#CDB79E", "#CDB7B5", "#CDBA96", "#CDBE70", "#CDC0B0", "#CDC1C5",
"#CDC5BF", "#CDC673", "#CDC9A5", "#CDC9C0", "#CDC8B1", "#CDCD00",
"#CDCDB4", "#CDCDC1", "#D15FEE", "#D1C166", "#D1EEEE", "#D2691E",
"#D3D3D3", "#D52079", "#D8BFD8", "#DAAA00", "#DB7093", "#DC143C",
"#DCDCDC", "#DE00A5", "#DEB887", "#E066FF", "#E0EEE0", "#E0EEEE",
"#E0FFFF", "#E6E6FA", "#E9967A", "#EE0000", "#EE00EE", "#EE0527",
"#EE1289", "#EE2C2C", "#EE30A7", "#EE3A8C", "#EE3B3B", "#EE4000",
"#EE5C42", "#EE6363", "#EE6A50", "#EE6AA7", "#EE7600", "#EE7621",
"#EE7942", "#EE799F", "#EE7AE9", "#EE8262", "#EE9A00", "#EE9A49",
"#EEA2AD", "#EEA9B8", "#EEAD0E", "#EEAEEE", "#EEB422", "#EEB4B4",
"#EEC591", "#EEC900", "#EECBAD", "#EECFA1", "#EED2EE", "#EED5B7",
"#EED5D2", "#EED8AE", "#EEDC82", "#EEDD82", "#EEDFCC", "#EEE0E5",
"#EEE5DE", "#EEE685", "#EEE8AA", "#EEE8CD", "#EEE9BF", "#EEE9E9",
"#EEEE00", "#EEEED1", "#EEEEE0", "#EF84EF", "#EFDF84", "#F08080",
"#F0F8FF", "#F0FFF0", "#F0FFFF", "#F33E96", "#F4A460", "#F5DEB3",
"#F5F5DC", "#F5F5F5", "#F5FFFA", "#F8F8FF", "#FAEBD7", "#FAF0E6",
"#FAFAD2", "#FDF5E6", "#FF1493", "#FF3030", "#FF34B3", "#FF3E96",
"#FF4040", "#FF42D2", "#FF4500", "#FF6347", "#FF69B4", "#FF6A6A",
"#FF6EB4", "#FF7F00", "#FF7F24", "#FF7256", "#FF80D2", "#FF8247",
"#FF82AB", "#FF83FA", "#FF8C00", "#FF8C69", "#FFA07A", "#FFA500",
"#FFA54F", "#FFAEB9", "#FFB5C5", "#FFB6C1", "#FFB90F", "#FFBBFF",
"#FFC125", "#FFC1C1", "#FFD39B", "#FFD700", "#FFDAB9", "#FFDEAD",
"#FFE1FF", "#FFE4B5", "#FFE4E1", "#FFE7BA", "#FFEC8B", "#FFEFD5",
"#FFEFDB", "#FFEBCD", "#FFE4C4", "#FFF0F5", "#FFF5EE", "#FFF68F",
"#FFF8DC", "#FFFACD", "#FFFAF0", "#FFFAFA", "#FFFF00", "#FFFFE0"];

	function getUid(){
		if(typeof arguments.callee.uid != 'undefined') return arguments.callee.uid;
		try{
			arguments.callee.uid = $('script:contains("envFlush")').html().match(/envFlush\(\{\"user\":\"(\d+)\"/)[1];
			return arguments.callee.uid;
		}catch(e){
			return false;
		}
	}
	shuffle = function(o){ //v1.0
	    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};
	
	function roundRect(ctx,x,y,width,height,radius,fill,stroke){if(typeof stroke=="undefined"){stroke=true}if(typeof radius==="undefined"){radius=5}ctx.beginPath();ctx.moveTo(x+radius,y);ctx.lineTo(x+width-radius,y);ctx.quadraticCurveTo(x+width,y,x+width,y+radius);ctx.lineTo(x+width,y+height-radius);ctx.quadraticCurveTo(x+width,y+height,x+width-radius,y+height);ctx.lineTo(x+radius,y+height);ctx.quadraticCurveTo(x,y+height,x,y+height-radius);ctx.lineTo(x,y+radius);ctx.quadraticCurveTo(x,y,x+radius,y);ctx.closePath();if(stroke){ctx.stroke()}if(fill){ctx.fill()}}
	
	//On notification changed
	$(document).on('DOMSubtreeModified click', '#fbNotificationsJewel', function(){
		var notiCount = parseInt($(this).find('#notificationsCountValue').html());
		if(notiCount > 0){
			$('link[rel*=icon]').attr('href', drawNotificationIcon(notiCount));
		}
		
		function checkNew(){
			$('#fbNotificationsFlyout').each(function(){
				if($(this).find('.notification.jewelItemNew').length) $(this).addClass('hasNew');
				else $(this).removeClass('hasNew');
			});		
		}
		checkNew();
		
		$('.notification:not(.jewelItemNew)').removeClass('first-3').unbind('mouseleave.hideAfterSeen');
		$('.notification.jewelItemNew:lt(3)').addClass('first-3').unbind('mouseleave.hideAfterSeen').bind('mouseleave.hideAfterSeen', function(e){
			$(this).fadeOut(function(){ $(this).removeClass('jewelItemNew').addClass('seen').show(); checkNew(); })
		});
		
	});
	
	$(document).on('DOMSubtreeModified', '#pagelet_ticker', function(){
		$(this).find('.fbFeedTickerStory:not(.colored)').each(function(){
			var i = Math.ceil(Math.random() * hex.length);
			$(this).addClass('colored').css('border-left', '4px solid ' + hex[i]);
		});
	});
	
	$(document).on('DOMSubtreeModified', 'head', function(){
		if(( $('#pagelet_navigation').length == 0) && (profilePic = $('.fbStreamPermalinkHeader, .profilePic, .fbPhotoContributor, .profileThumb').find('img[src*=profile]:first').attr('src'))){
			$('link[rel*=icon]').attr('href', profilePic.replace('_n', '_q'));
		}else{
			$('link[rel*=icon]').attr('href', chrome.extension.getURL('fb_icon_black.ico') )
		}
	});
	
	$(document).on('click', '#pageLogo a, #pagelet_navigation a', function(){
		 $('#globalContainer').animate({scrollTop: 0}, 600); 
	});
	
	$('#globalContainer').bind('scroll', function(){
		$('body').scrollTop(1);$('body').scrollTop(0);
	});
	
	$(window).on('hashchange pushstate popstate', function(){
		console.log(window.location);
	});
	
	/*setInterval(function(){
		if(( $('#pagelet_navigation').length == 0) && (profilePic = $('.fbStreamPermalinkHeader, .profilePic, .fbPhotoContributor, .profileThumb').find('img[src*=profile]:first').attr('src'))){
			profilePic.replace('_n', '_q');
			$('link[rel*=icon]').attr('href', profilePic);
		}else{
			$('link[rel*=icon]').attr('href', chrome.extension.getURL('fb_icon_black.ico') )
		}
	}, 500);*/
		
	function drawNotificationIcon(value){
		var num = parseInt(value);
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext("2d");
		canvas.width = canvas.height = 16;
		ctx.strokeStyle = "#555";
		ctx.fillStyle = "#555";
		roundRect(ctx, 0, 0, 16, 16, 6, true);
		
		ctx.font="bold 9px 'lucida grande', 'tahoma', 'verdana', 'arial', 'sans-serif'";
		ctx.fillStyle = "#FFF"; // #f03d25;
		if(num < 10){
			ctx.font="bold 9px 'lucida grande', 'tahoma', 'verdana', 'arial', 'sans-serif'";
			ctx.fillText(num,4,12);
		} else{
			ctx.font="9px 'lucida grande', 'tahoma', 'verdana', 'arial', 'sans-serif'";
			ctx.fillText(num,1,12);
		}
		return canvas.toDataURL("image/png");
	}
	
	$.wait("#fbDockChatTabs .fbDockChatTabFlyout:not(.fbPlusUI)", function(){
		var tab = $(this).addClass('fbPlusUI');
		var messageHref = tab.find('.uiMenuItem a[href*="facebook.com/messages/"]').attr('href');
		var messageLink = $('<a class="messageLink"/>').attr({
			'href' : messageHref,
			'target' : '_blank',
			'aria-label' : '在新分頁開啟完整對話',
			'data-hover' : 'tooltip', 'data-tooltip-alignh' : 'center'
		}).click(function(){
			window.open($(this).attr('href'));
		}).appendTo(tab.find('.titlebarTextWrapper'));
	}, true);
	
	$.wait("#fbNotificationsFlyout:visible:not(:has(.openAllNotifications))", function(){
		var noti = this;
		var link = $('<a class="uiHeaderActions rfloat openAllNotifications" href="#" onclick="window.Toggler && Toggler.hide();">以新分頁開啟所有新通知</a>')
			.insertBefore(noti.find(".uiHeaderTitle"))
			.click(function(){
				var ids = [];
				noti.find(".notification[data-gt]:not(.read)").each(function(){
					var data = $.parseJSON($(this).attr('data-gt'));
					var context_id = data.context_id;
					if($.inArray(context_id, ids) != -1) return;
					if(data.type == "poke" || data.unread == "0") return;
					ids.push( context_id );
					$(this).addClass('read');
					var href = $(this).find("a").attr('href');
					window.open(href)
				});
			});
	});
	$('ul.fbChatOrderedList li.active:not(.mobile):not(.web)').livequery(function(){
		if($(this).html().match(/モバイル|mobile|行動/i)){
			$(this).addClass('mobile')
		}else{
			$(this).addClass('web')
		}
	});

	$('body.hasSmurfbar').livequery(function(){
		$(this).addClass('fbPlusUIDsiable')
	});
	

})(jQuery);