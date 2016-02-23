
(function ($) {
  $(function() {

    $('input, select, input:checkbox').styler();

  });
})(jQuery);

 $('.list-control-sort__toggle').click(function(e) {
   e.preventDefault();
   var self = $(this);
 	if (self.hasClass('active')) {
     self.removeClass('active');
   } else {
     self.addClass('active');
   }

 });

$(document).ready(function() {
  var tabContainers = $('.big-photo a');
  tabContainers.hide().filter(':first').show();

  $('.small-photos a').click(function (e) {
    e.preventDefault();
    tabContainers.hide();
    tabContainers.filter(this.hash).fadeIn(300);
    $('.small-photos a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();
});
