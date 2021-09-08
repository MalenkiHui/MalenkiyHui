$(function () {
  $('.block').each(function (index, el) {
    setTimeout(function () {
      $(el).animate({
        opacity: 0.9
      }, 1000);
    }, 1000 + 1000 * index);
  });
});


  function clickButton () {
    if ($('.button-registration').hasClass('active')) {
      clickButton1();
    } else {
      clickButton2();
    }
  };

  function clickButton1(){
    $('.button-registration').removeClass('active');
    $(".circle").css("display", "none");
    $("#rename1").css("display", "block");
    $("#rename2").css("display", "none");
  }
  function clickButton2(){
    $('.button-registration').addClass('active');
    $(".circle").css('display', 'block');
    $("#rename1").css("display", "none");
    $("#rename2").css("display", "block");  
  }

  // if(window.matchMedia("(pointer: coarse)").matches) {
  $(".button-registration").onclick =clickButton;
// }else{ 

//   $(document).ready(function () {
//     $(".button-registration").hover(function () { // задаем функцию при наведении курсора на элемент	
//       $('.button-registration').addClass('active');
//       $(".circle").css('display', 'block');
//       $("#rename1").css("display", "none");
//       $("#rename2").css("display", "block");
//     }, function () { // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
//       $('.button-registration').removeClass('active');
//       $(".circle").css("display", "none");
//       $("#rename1").css("display", "block");
//       $("#rename2").css("display", "none");

//     });
//   });
// }

