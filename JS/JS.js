$(function () {
  $('.block').each(function (index, el){
    setTimeout(function () {
      $(el).animate({ 
        opacity: 0.9
      }, 1000);
    }, 1000 + 1000 * index);
  });
});


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