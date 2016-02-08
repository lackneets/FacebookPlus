$.wait(".fbDockChatTabFlyout:not(.showOnline)", function(){
	
	$(this).each(function(){
		
		var fbDockChatTabFlyout = $(this);
		if($(this).find(".conversation:has(*)").length == 0) return;
		if(!$(fbDockChatTabFlyout).find(".uiSelectorMenu .itemAnchor[ajaxify]").length) return;
		if($(fbDockChatTabFlyout).find(".conversation").text() == "") return;
		$(fbDockChatTabFlyout).addClass('showOnline');
		var id = $(fbDockChatTabFlyout).find(".uiSelectorMenu .itemAnchor[ajaxify]").attr("ajaxify").match(/id=(\d+)$/)[1];

		get_group_members(id, function(groupMembers){
			
			updateGroupOnlineUsers(fbDockChatTabFlyout, id , groupMembers);
			setInterval(function(){updateGroupOnlineUsers(fbDockChatTabFlyout, id, groupMembers);}, 10000);
		});
	});
}, true);

function updateGroupOnlineUsers(fbDockChatTabFlyout, group_id, groupMembers){
	
	fbDockChatTabFlyout.find(".FacebookPlus_group_online").remove();
	var onlinePiles = $('<div class="FacebookPlus_group_online"/>').insertAfter($(fbDockChatTabFlyout).find(".titlebar"));
	var online = get_buddy_list([]).buddy_list;
	onlinePiles.empty();
	
	for(var id in online.userInfos){
		if($.inArray(id, groupMembers) == -1) continue;;
		var thumb = $("<div class='online_avatar'/>").appendTo(onlinePiles);
		var img = $('<img class="uiProfilePhoto uiProfilePhotoMedium img">').attr('title', online.userInfos[id].name ).attr('src', online.userInfos[id].thumbSrc).appendTo(thumb);
	}
	
}

function get_group_members(group_id, callback){
	var groupMembers = [];
	var url = "http://www.facebook.com/groups/"+group_id+"/members/";
	$.ajax({
		url: url,
		type: "get",
		success: function(data){				
			var re = /hovercard=\"\/ajax\/hovercard\/user.php\?id\=(\d+)/g, match;
			while( match = re.exec(data) ){
				groupMembers.push(match[1]);
			}
			if(typeof callback == 'function') callback(groupMembers);
		}
	});
}
function get_user_info(ids){
	var url = "http://www.facebook.com/ajax/chat/user_info.php?__a=1";
	for(var i in ids){
		if(typeof ids[i] == 'string') url += '&ids[' + i + ']=' + ids[i];
	}
	var val;
	$.ajax({
		url: url,
		type: 'get',
		async: false,
		dataType: 'text',
		success: function(data){
			val = JSON.parse(data.replace('for (;;);', '')).payload;
		}
	});
	return val;
}
function get_buddy_list(ids){
	var url = "http://www.facebook.com/ajax/chat/buddy_list.php?__a=1";
	var data = {user: user_id(), fetch_mobile: false, post_form_id: post_form_id(), fb_dtsg: fb_dtsg(), lsd : null, post_form_id_source: "AsyncRequest", __user: user_id(), phstamp:null };
	for(var i in ids){
		if(typeof ids[i] == 'string') data['available_user_info_ids[' + i + ']'] = ids[i];
	}
	var val;
	$.ajax({
		url: url,
		type: 'post',
		data: data,
		async: false,
		dataType: 'text',
		success: function(data){
			val = JSON.parse(data.replace('for (;;);', '')).payload;
		}
	});
	return val;
}