$(document).ready(function(){
	$(".joinIn").click(function(){ 
	$('.regUs').css('display', 'none');
	$('.regIn').css('display', 'block');
	});
});

$(".joinUs").click(function(){
	$('.regUs').css('display', 'block'); 
	$('.regIn').css('display', 'none');
	
	
});

