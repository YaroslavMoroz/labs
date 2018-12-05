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

if((window.matchMedia("(max-width: 1365px)")).matches){
	
	$('.sponsor_content').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 5,
		arrows: false,
		slidesToScroll: 5
	});
	$('.furni_slider').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1,
		dots: true
	});
}
else{
	$('.furni_slider').slick({
	infinite: true,
	arrows: false,

    slidesToScroll: 1,
	dots: true, 
	rows: 2,
	slidesPerRow: 3
	
});
}

if((window.matchMedia("(max-width: 1365px)")).matches){
	$('#slider31').slick({
    infinite: true,
	arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5
});
$('#slider21').slick({
    infinite: true,
	arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5
});
$('#slider11').slick({
    infinite: true,
	arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5
});
$('#new_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5
});	
}
else{
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
}

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
if((window.matchMedia("(max-width: 1365px)")).matches){
	$('#box1').click(function(){
	$('.priem_text1').css('z-Index','3');
	$('.priem_text2').css('z-Index','1');
	$('.priem_text3').css('z-Index','1');
	$('.priem_text4').css('z-Index','1');
});
$('#box2').click(function(){
	$('.priem_text1').css('z-Index','1');
	$('.priem_text2').css('z-Index','2');
	$('.priem_text3').css('z-Index','1');
	$('.priem_text4').css('z-Index','1');
});
$('#box3').click(function(){
	$('.priem_text3').css('z-Index','3');
	$('.priem_text1').css('z-Index','1');
	$('.priem_text2').css('z-Index','1');
	$('.priem_text4').css('z-Index','1');
});
$('#box4').click(function(){
	$('.priem_text4').css('z-Index','3');
	$('.priem_text1').css('z-Index','1');
	$('.priem_text2').css('z-Index','1');
	$('.priem_text3').css('z-Index','1');
});
	$(document).ready(function(){
		$('.gallery_slider').slick({
		infinite: true,
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1,
		dots: true
	});
	});
}
else{
	$(document).ready(function(){
		$('.gallery_slider').slick({
		infinite: true,
		slidesToShow: 3,
		arrows: false,
		slidesToScroll: 3,
		dots: true
	});
	});
}

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
$("#menu_button").click(function() {
  $("#menu_button").css("display","none");
  $("#menu_button_close").css("display","block");
  $(".header_menu_buttons").css("display","block");
  
});
$("#menu_button_close").click(function() {
  $("#menu_button_close").css("display","none");
  $("#menu_button").css("display","block");
  $(".header_menu_buttons").css("display","none");
});
$('.shop_pop').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});

$('#gallery_slider_id').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});
$('#slider_1').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});
$('#slider_2').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});
$('#slider_3').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});
$('#slider31').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});
$('#slider21').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});
$('#slider11').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});
$('#new_slider').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});
$('.sert').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});
$('#furni_slider_id').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});
$('.sponsor_content').photobox('a',{
	time:0,       //Убрать кнопку autoplay, если нужна - то поставить от 1000
	thumbs:false,  //Показать миниатюры. Цикл с последнего изображения на первое
	zoomable:true //Включить, отключить увеличение колесиком мыши
});