$(function () {
  $('.block').each(function (index, el){
    setTimeout(function () {
      $(el).animate({ 
        opacity: 0.9
      }, 1000);
    }, 1000 + 1000 * index);
  });
});

if(jQuery.support.touch){
  $(".button-registration").on('click touchstart', function () {
    if($("#rename1").css("display", "block")){
    $('.button-registration').css({
      'color': rgb(253, 203, 203),
        '-moz-transform': 'translateY(80px) rotate(0.25turn) scale(3, 1.5)',
        /* Для Firefox */
        '-ms-transform': 'translateY(80px) rotate(0.25turn) scale(3, 1.5)',
        /* Для IE */
        '-webkit-transform': 'translateY(80px) rotate(0.25turn) scale(3, 1.5)',
        /* Для Safari, Chrome, iOS */
        '-o-transform': 'translateY(80px) rotate(0.25turn) scale(3, 1.5)',
        /* Для Opera */
        'transform':'translateY(80px) rotate(0.25turn) scale(3, 1.5)'
    });
    $(".circle").css('display', 'block');
    $("#rename1").css("display", "none");
    $("#rename2").css("display", "block");

  }else {
    $('.button-registration').css({
      'color': rgb(253, 203, 203),
        '-moz-transform': '',
        /* Для Firefox */
        '-ms-transform': '',
        /* Для IE */
        '-webkit-transform': '',
        /* Для Safari, Chrome, iOS */
        '-o-transform': '',
        /* Для Opera */
        'transform':''
    }); // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
    $(".circle").css("display", "none");
    $("#rename1").css("display", "block");
    $("#rename2").css("display", "none");
  }
});
}else{
$(document).ready(function () {
  $(".button-registration").hover(function () { // задаем функцию при наведении курсора на элемент	
    $(".circle").css('display', 'block');
    $("#rename1").css("display", "none");
    $("#rename2").css("display", "block");

  }, function () { // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
    $(".circle").css("display", "none");
    $("#rename1").css("display", "block");
    $("#rename2").css("display", "none");
    
  });
});
}