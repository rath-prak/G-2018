import $ from 'jquery';
import whatInput from 'what-input';
import { TweenMax, Power2, TimelineLite } from "gsap";

import slick from './lib/slick.min.js';
import ScrollMagic from 'ScrollMagic';

import navigation from './lib/navigation';

navigation();


$(document).ready(function(){

  // Toggle Collapse
    $('.faq li .question').click(function () {
      $(this).find('.plus-minus-toggle').toggleClass('collapsed');
      $(this).parent().toggleClass('active');
    });

  /* TABS */
  $('.tabs-nav .tab-links a').on('click', function(e)  {
    var currentAttrValue = $(this).attr('href');
    // Show/Hide Tabs
    $('.tabs-nav ' + currentAttrValue).show().siblings().hide();
    // Change/remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });


});
