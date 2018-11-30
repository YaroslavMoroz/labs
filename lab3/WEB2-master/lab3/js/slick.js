$(".joinUs").click(function(){ 
	$('.register').addClass('registerShow');
	$('.register2').removeClass('registerShow');
	
});
$(".joinIn").click(function(){ 
	$('.register').removeClass('registerShow');
	$('.register2').addClass('registerShow');
});