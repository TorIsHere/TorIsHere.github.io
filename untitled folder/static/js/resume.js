var projects = ["#project1", "#project2", "#project3"];
var current_showed = 'empty';

function hideItem(item){
	$(item).hide();
}

function showContent(obj_id) {
	if(current_showed != 'empty' && isElementInView(current_showed)) {
		$(current_showed).hide();
		$(obj_id).show();
	}
	else {
		if(current_showed != 'empty') {
			hideItem(current_showed);
		}
		$(obj_id).slideToggle( "slow", function(){
			if(!isElementInView(obj_id)){
				$('html, body').animate({
	    			scrollTop: ($(obj_id).offset().top)
				},500);
			}
		});
	}
	current_showed = obj_id;
}

function hideAll() {
	for (var i=0; i<projects.length; i++){
		$(projects[i]).hide();
	}
}

function isElementInView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function() {
	hideAll();
	$("#project1_button").click(function(){
		showContent("#project1");
	});
	$("#project2_button").click(function(){
		showContent("#project2");
	});
	$("#project3_button").click(function(){
		showContent("#project3");
	});
});