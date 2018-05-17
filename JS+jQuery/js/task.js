/*課題1*/
$(function(){
  $('div[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
/*課題2*/
$(function(){
  $('#accordion > dd').hide();
  $('#accordion > dt')
    .click(function(e){
      $('+dd', this).slideToggle(500);
    })
});
/*課題3*/
$(function(){
  $('#modal_button').click(function(){
    $('#modal').fadeIn();
  });
  $('#modal_close').click(function(){
    $('#modal').fadeOut();
  });
});
/*課題4*/
$(function(){
  $('.HambTog').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.Hamb').addClass('active');
    } else {
      $('.Hamb').removeClass('active');
    }
  });
});
/*課題5*/
$(function(){
    $(".menu > ul > li").hover(function(e){
          $(this).children("ul").stop(true, false).fadeToggle(150);
          e.preventDefault();
    });
});
/*課題6*/

/*課題7*/
$(function() {
	$('.tab li').click(function() {
		var index = $('.tab li').index(this);
		$('.tab_content li').css('display','none');
		$('.tab_content li').eq(index).css('display','block');
		$('.tab li').removeClass('tab_select');
    $('.tab_content li').removeClass('hide');
		$(this).addClass('tab_select');
	});
});
/*課題8*/
$(function(){
  $.getJSON("json/task.json", {name: "chara"}, function(data){
  	var dat = data.charas;

  	$.each(dat, function(i){
  		$(".nameData").append("<p>id: " + dat[i].id + "　キャスト: " + dat[i].chara + "　　(CV: " + dat[i].cv + ")</p>");
  	});
  });  });
