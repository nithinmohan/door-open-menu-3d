initial_state=function()
{
	$(".menuitem").removeClass("blur");
	$("#blockleft").removeClass("leftanim");
	$("#blockright").removeClass("rightanim");
}//for initial plane state
selected_state=function()
{
	$(".menuitem").addClass("blur");
	$("#blockleft").addClass("leftanim");
	$("#blockright").addClass("rightanim");
}//for opened state and blur for all
comefor=function(elem){$(".menuitem").removeClass("menuhover");$(elem).addClass("menuhover");}//for forwarding hovered menuitem and setting its blur zero
comeback=function(){$(".menuitem").removeClass("menuhover");}//setting menu hover effect to zero for all menuitems
$(document).ready(function() {
var cur_selected;
$(".menublocks").mouseenter(selected_state);
$(".menublocks").mouseleave(initial_state);
$(".menuitem").mouseenter(function(){comefor(this);});
$(".menuitem").mouseleave(comeback);
$(".menuitem").click(function()
{
	if(cur_selected!=this)
	{
	old_selected=cur_selected;
	$("#c"+$(old_selected).attr("id")).removeClass("selected");
	cur_selected=this;
	var selectedmenu=$(this).attr("id");
	$("#c"+selectedmenu).addClass("selected");
	$(".menublocks").unbind("mouseleave");
	$(".menublocks").bind("mouseleave",function(){comefor(cur_selected);})
}
})
});