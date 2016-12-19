/**
 * Requires
 */

import $ from 'jquery';
import throttle from 'lodash/throttle';

/***
 * Variables
 */

const $window = $(window);
const $parallax = $('#particles-js');
let maxHeight = $parallax.outerHeight();
/**
 * Initialisation
 */

function initialise() {

  if (!$parallax) {
    return;
  }

  $window.scroll(throttle(parallax, 10));

  $window.resize(function() {
    maxHeight = $parallax.outerHeight();
  });
}

function parallax() {
  var scrollTop = $window.scrollTop();

  if (scrollTop < maxHeight) {
    $parallax.css({
      transform: 'translate3d(0px,' + (scrollTop / 2) + 'px, 0px)'
    });
  }
}
/**
 * Invoke function
 */
initialise();
