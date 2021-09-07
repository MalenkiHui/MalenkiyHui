$(function(){
    $('.block').each(function(index, el) {
      setTimeout(function() {
        
        $(el).animate({width:'toggle'}, 350);
      }, 200 + 800 * index);
    });
  });
  $( document ).ready(function(){
$(".button-registration").hover(function(){ // задаем функцию при наведении курсора на элемент	
  $( ".circle" ).css( 'display','block');
  // задаем цвет заднего фон
         // задаем текстовое содержимое
  }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
  $( ".circle" ).css( "display","none" ) // задаем цвет заднего фона
         // задаем текстовое содержимое
});
});