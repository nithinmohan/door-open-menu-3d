ishome=1;
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
	if((cur_selected!=this)||(ishome==1))
	{
		ishome=0;
	old_selected=cur_selected;
	$("#c"+$(old_selected).attr("id")).removeClass("selected");
	cur_selected=this;
	var selectedmenu=$(this).attr("id");
	$("#c"+selectedmenu).addClass("selected");
	$(".menublocks").unbind("mouseleave");
	$(".menublocks").bind("mouseleave",function(){comefor(cur_selected);});
}
});
$(".home").click(function(){
	initial_state();
	comeback();
	$(".content").removeClass("selected");
	$(".menublocks").unbind("mouseleave");
	$(".menublocks").mouseleave(initial_state);
	ishome=1;
});
function addimage(number)
        	{
        		var limit=number;
        		for(num=1;num<=limit;num++)
        		{
       	 		inhtml='<img src=\"images/thumbs/'+num+'.jpg\""/></img';
       	 		$("#thumbslist").append(inhtml);
       	 		}
        	}
function set_thumbs(no_of_thumbs,thumb_width)
{
	 $(".thumbs").attr("width",thumb_width*no_of_thumbs);
	  addimage(no_of_thumbs);
}
$("#two").click(function(){
	set_thumbs(32,180);
});

       
$(".thumbs").live("mousemove",function(e){
		position=e.pageX;
		relative_pos=position-parseInt($("#super").css("margin-left"))-parseInt($(".selected").css("left"))*$(window).width()/100;
		largewidth=$(".thumbs").width();
		smallwidth=$("#super").width();
		largewidth=largewidth-smallwidth;
		newmar=relative_pos*largewidth/smallwidth;
		$(".thumbs").stop().animate({"margin-left":"-"+newmar+"px"},{duration: 'slow',easing: 'easeOutBack'});
	});
	k=180;
	var src;
	$(".thumbs>img").live("click",function(){
		src=$(this).attr("src");
		srcarray=src.split('/');
		$("#container>.back").attr("src",'images/'+srcarray[2]);
		$("#container").css({"-webkit-transform":"perspective(600) rotateY("+k+"deg)"});
		$("#container>#one").toggleClass("back front");
		$("#container>#two").toggleClass("back front");
		k=k+180;
	});
});