$(function () {
  'use strict';

  // detail and set when I last updated the resume
  var lastUpdated = "July 2015";

  $('#lastUpdated').html("Last updated " + lastUpdated + ".");

  // finds the gallery images
  var $images = $('.projects .gallery img');

  // iterates through each image and adds the approrpiate padding
  // this must be done before we open the images because you will see
  // the padding change take effect otherwise.
  $images.each(function() {
    var $this  = $(this);
    var src    = $this.attr('src');
    var tempIm = new Image();

    tempIm.src = src;

    // tries to load the image to calculate width and height since
    // they are hidden by default
    $(tempIm).on('load', function() {
      var width  = this.width;
      var height = this.height;

      // finds scale factor to 148
      var wScale = 148 / (0.0 + width);
      var hScale = 148 / (0.0 + height);

      var scale = 0;

      // chooses the proper scale factor
      if (width > height) {
        scale = wScale;
      } else {
        scale = hScale;
      }

      var newWidth  = width * scale;
      var newHeight = height * scale;

      // set the appropriate padding
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

  var $items = $('.menu .item');
  var $logo  = $('#logo');

  // navigates throgh the pages using a state machine
  var navFunction = function () {
    var $this, $bodyContent, newSection, $activeContent, $newContent;
    $this = $(this);

    // don't do anything if this is already selected
    if (!$this.hasClass('main')) {
      // find any animating content
      $bodyContent = $('.content .bodyContent.animating');

      // don't do anything if animating
      if ($bodyContent.length !== 0) {
        return;
      }

      // active := semantic selected
      // main := my selection

      // remove all active items and main items
      $items.removeClass('active');
      $items.removeClass('main');
      // make this new one the active and main one
      $this.addClass('active');
      $this.addClass('main');

      // find what tab I selected
      newSection = $this.attr('value');
      // select any content that is not hidden
      $activeContent = $('.content .bodyContent').not('.hidden');
      // find the new content to show
      $newContent = $('.content .bodyContent.' + newSection);
      // animate me hiding what we had before and unhiding our
      // new content immediately after
      $activeContent.transition('slide down', function () {
        $newContent.transition('slide down');
      });
    }
  };

  // click listener on all the nav items
  $items.on('click', navFunction);
  // clickingon the logo is like clicking on the about me
  $logo.on('click', function() {$('.menu .item[value="about"]').click()});
});