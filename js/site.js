$(function () {
  $('div#main #what-we-do article').click(function (e) {
    e.preventDefault();
    $(this).closest('#what-we-do').attr('data-active', $(this).attr('id'));
  });
  
  // var $main = $('#main');
  // $(window).resize(function (e) {
  //   var height = window.innerHeight;
  //   if (height < 660) {
  //     $main.css('top', '660px');
  //   } else {
  //     $main.css('top', '');
  //   }
  // });
  
  var transitionTime = 0;
  function scrolled() {
    var $body = $('body');
    if (Date.now() - transitionTime <= 200) return;
    var distance = $(window).scrollTop() - ($('#main').position().top / 2);
    if ($body.hasClass('anchored') && distance < -50) {
      $body.removeClass('anchored');
      $('nav').fadeOut(500);
      transitionTime = Date.now();
    } else if (!$body.hasClass('anchored') && distance >= 0) {
      $body.addClass('anchored');
      $('nav').fadeIn(500);
      transitionTime = Date.now();
    }
    
    distance = $(window).scrollTop() - ($('#main').position().top * 2 / 3);
    if (!$('#who-we-are').hasClass('colored') && distance >= 0) {
      $('#who-we-are').addClass('colored');
    }
  }
  window.onscroll = scrolled;
  
  $('body')
    .on('click', 'a[href="#join-us"], li.join-us', function (ev) {
      ev.preventDefault();
      ev.stopImmediatePropagation();
      $('#equipe').addClass('joining');
    })
    .on('click', '.join-form a.close', function (ev) {
      ev.preventDefault();
      ev.stopImmediatePropagation();
      $('#equipe').removeClass('joining');
    })
    .on('click', 'a[href^="#"]', function (ev) {
      $.scrollTo($(this).attr('href'), 500, {
        offset: {top: -67},
        easing: 'easeOutQuint'
      });
      ev.preventDefault();
    });
  
  scrolled();
});