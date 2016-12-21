/**
 * Requires
 */
import * as particle from "./particles.js";
import * as particles from "./particles.min.js";
import $ from 'jquery';
import throttle from 'lodash/throttle';

/***
 * Variables
 */

const $window = $(window);
const $parallax = $('header');
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

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
