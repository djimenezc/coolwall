(function(window) {
  'use strict';

  $('#showLeftPush').on('click', function() {
    $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
    $('body').hasClass('cw-spmenu-push-toright') ? $('body').removeClass('cw-spmenu-push-toright') : $('body').addClass('cw-spmenu-push-toright');
    $('#cw-spmenu-s1').hasClass('cw-spmenu-open') ? $('#cw-spmenu-s1').removeClass('cw-spmenu-open') : $('#cw-spmenu-s1').addClass('cw-spmenu-open');
  });
})(window);