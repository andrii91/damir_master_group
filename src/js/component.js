$(document).ready(function() { 
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  $('.play-btn').click(function () {
    var iframe_url = "https://www.youtube.com/embed/" + $(this).parent().data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
     var iframe_height = $(this).parent().find('img').height();
    var iframe_width = $(this).parent().find('img').width();
    $(this).hide();
    $(this).parent().find('.preview').hide();
    $(this).parent().find('.video-title').hide();
    $(this).parent().append('<iframe src="' + iframe_url + '?rel=0&amp;controls=0&amp;showinfo=0"  width="' + iframe_width + '" height="' + iframe_height + '"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
  });
  
  $('.whom-tab li a').click(function(e){
    e.preventDefault();
    $('.whom-tab li a').removeClass('active');
    $('.whom-content .item').removeClass('active');
    
    $(this).addClass('active');
    $(''+$(this).attr('href')).addClass('active');
  })
  
  
  $('.manifesto-item').hide();
  $('.manifesto-btn').click(function(e){
    e.preventDefault();
    $('.manifesto-item').slideToggle(200);
  });
  
  $('.packages-item .order-btn').click(function(){
    $('input[name="type"]').val($(this).parents('.packages-item').find('h4').text());
  });
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1500);

  });
  $('.mob-btn').click(function(){
    $('.menu').slideToggle('200');
    $(this).parents('nav').toggleClass('bg');
  })

});