$(document).ready(function(){
	$(".li1").mouseenter(function(){
		$(".anm1").addClass("animated bounce")
	});
	$(".li1").mouseleave(function(){
		$(".anm1").removeClass("animated bounce")
	});
	$(".li2").mouseenter(function(){
		$(".anm2").addClass("animated tada")
	});
	$(".li2").mouseleave(function(){
		$(".anm2").removeClass("animated tada")
	});
});