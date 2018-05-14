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
$(function() {
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
$(function() {
  $().click(function () {
    if ($(".Mac:first").is(":hidden")) {
      $(".Mac").slideDown("slow");
    } else {
      $(".Mac").hide();
    }
  });
});

/*課題7*/
$(function() {
	$('.tab li').click(function() {
		var index = $('.tab li').index(this);
		$('.content li').css('display','none');
		$('.content li').eq(index).css('display','block');
		$('.tab li').removeClass('select');
		$(this).addClass('select')
	});
});
