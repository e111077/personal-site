$(function () {
  'use strict';

  var lastUpdated = "December 2014";

  $('#lastUpdated').html("Last updated " + lastUpdated + ".");
  
  var $items = $('.menu .item');
  var $logo  = $('#logo');

  var navFunction = function () {
    var $this, $bodyContent, newSection, $activeContent, $newContent;
    $this = $(this);

    if (!$this.hasClass('main')) {
      $bodyContent = $('.content .bodyContent.animating');

      if ($bodyContent.length !== 0) {
        return;
      }

      $items.removeClass('active');
      $items.removeClass('main');
      $this.addClass('active');
      $this.addClass('main');

      newSection = $this.attr('value');
      $activeContent = $('.content .bodyContent').not('.hidden');
      $newContent = $('.content .bodyContent.' + newSection);
      $activeContent.transition('slide down', function () {
        $newContent.transition('slide down');
      });
    }
  };

  $items.on('click', navFunction);
  $logo.on('click', function() {$('.menu .item[value="about"]').click()});
});