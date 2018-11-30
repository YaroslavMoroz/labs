$(document).ready(function(){
	$("#mas").css("color","#000");
	$('.header_scroll').slick({arrows:false});
	
	
$("#mas").click(function(){ 
	$("#mas").css("color","#000");
	$("#eco").css("color","#b6211e");
	$("#eco2").css("color","#b6211e");
	$("#slider_1").css("display", "block");
	$("#slider_2").css("display", "none");
	$("#slider_3").css("display", "none");
	
	$("#slider11").css("display", "block");
	$("#slider21").css("display", "none");
	$("#slider31").css("display", "none");
});
$("#eco").click(function(){ 
	$("#eco").css("color","#000");
	$("#mas").css("color","#b6211e");
	$("#eco2").css("color","#b6211e");
	$("#slider_2").css("display", "block");
	$("#slider_1").css("display", "none");
	$("#slider_3").css("display", "none");
	
	$("#slider21").css("display", "block");
	$("#slider11").css("display", "none");
	$("#slider31").css("display", "none");
});
$("#eco2").click(function(){ 
	$("#eco2").css("color","#000");
	$("#mas").css("color","#b6211e");
	$("#eco").css("color","#b6211e");
	$("#slider_3").css("display", "block");
	$("#slider_1").css("display", "none");
	$("#slider_2").css("display", "none");
	
	$("#slider31").css("display", "block");
	$("#slider11").css("display", "none");
	$("#slider21").css("display", "none");
});
$('.furni_slider').slick({
	infinite: true,
	arrows: false,

    slidesToScroll: 1,
	dots: true, 
	rows: 2,
	slidesPerRow: 3
	
});


$('#slider31').slick({
    infinite: true,
	arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6
});
$('#slider21').slick({
    infinite: true,
	arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6
});
$('#slider11').slick({
    infinite: true,
	arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6
});
$('#new_slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6
});
$(".close_form").click(function(){ 
	$('.obratniy').css('display', 'none');
});
$(".call_back").click(function(){ 
	$('.obratniy').css('display', 'block');
});
});

$(document).ready(function(){
	$('.slickSlider1').slick();
	

});
$(document).ready(function(){
	$('.slickSlider2').slick();

});
$(document).ready(function(){
	$('.slickSlider3').slick();

});
$("body").scroll(function() {
  if ($(this).scrollTop() > 0) {
    $(".header_menu_contact").css("display","none");
	
  } else {
    $(".header_menu_contact").css("display","flex");
  }
});
$(document).ready(function(){
	$('.gallery_slider').slick({
	infinite: true,
	slidesToShow: 3,
	arrows: false,
	slidesToScroll: 3,
	dots: true
});
});
$('.slickSlider1').on('swipe', function(event, slick, direction){
  var cur_slide = $('.slickSlider1').slick('slickCurrentSlide');
  if(cur_slide == 1){
  $('#slider11').slick('slickGoTo', 6);}
else{
	$('#slider11').slick('slickGoTo', 0);
}
});
$('.slickSlider2').on('swipe', function(event, slick, direction){
  var cur_slide = $('.slickSlider2').slick('slickCurrentSlide');
  if(cur_slide == 1){
  $('#slider21').slick('slickGoTo', 6);}
else{
	$('#slider21').slick('slickGoTo', 0);
}
});
$('.slickSlider3').on('swipe', function(event, slick, direction){
  var cur_slide = $('.slickSlider3').slick('slickCurrentSlide');
  if(cur_slide == 1){
  $('#slider31').slick('slickGoTo', 6);}
else{
	$('#slider31').slick('slickGoTo', 0);
}
});
$("#new_models").click(function(){ 
	var cur_slide = $('#new_slider').slick('slickCurrentSlide');
	$('#new_slider').slick('slickGoTo', 0);
});
$("#popular_models").click(function(){ 
	var cur_slide = $('#new_slider').slick('slickCurrentSlide');
	$('#new_slider').slick('slickGoTo', 6);
});
$('#box1').hover(function(){
	$('.priem_text1').css('z-Index','3');
	$('.priem_text2').css('z-Index','1');
	$('.priem_text3').css('z-Index','1');
	$('.priem_text4').css('z-Index','1');
});
$('#box2').hover(function(){
	$('.priem_text1').css('z-Index','1');
	$('.priem_text2').css('z-Index','2');
	$('.priem_text3').css('z-Index','1');
	$('.priem_text4').css('z-Index','1');
});
$('#box3').hover(function(){
	$('.priem_text3').css('z-Index','3');
	$('.priem_text1').css('z-Index','1');
	$('.priem_text2').css('z-Index','1');
	$('.priem_text4').css('z-Index','1');
});
$('#box4').hover(function(){
	$('.priem_text4').css('z-Index','3');
	$('.priem_text1').css('z-Index','1');
	$('.priem_text2').css('z-Index','1');
	$('.priem_text3').css('z-Index','1');
});
