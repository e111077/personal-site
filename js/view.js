$(function () {
  'use strict';

  var lastUpdated = "December 2014";

  $('#lastUpdated').html("Last updated " + lastUpdated + ".");
  
  var $items = $('.menu .item');
  var $logo  = $('#logo');

  var resizeBoxes = function () {
    var $images = $('.projects .gallery img');

    $images.each(function() {
      var $this  = $(this);
      var src    = $this.attr('src');
      var tempIm = new Image();

      tempIm.src = src;

      $(tempIm).on('load', function() {
        var width  = tempIm.width;
        var height = tempIm.height;

        var wScale = 148 / (0.0 + width);
        var hScale = 148 / (0.0 + height);

        var scale = 0;

        if (wScale < hScale) {
          scale = wScale;
        } else {
          scale = hScale;
        }

        var newWidth  = width * scale;
        var newHeight = height * scale;

        if (newWidth < 148) {
          var pad = (148 - newWidth)/2;

          $this.css({"padding-left" : pad, "padding-right" : pad});
        }

        if (newHeight < 148) {
          var pad = (148 - newHeight)/2;

          $this.css({"padding-top" : pad, "padding-bottom" : pad});
        }
      });
    });
  }

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
  resizeBoxes();
});