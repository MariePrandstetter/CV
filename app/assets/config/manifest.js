//= link_tree ../images
//= link_directory ../javascripts .js
//= link_directory ../stylesheets .css

$(function() {
  $('progress').each(function() {
    var max = $(this).val();
    $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
      });
});

// trouver où intégrer JS
