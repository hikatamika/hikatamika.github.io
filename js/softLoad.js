$(document).ready(function(){

/*! Fades in page on load */
$('.softLoad').css('visibility', 'hidden');

setTimeout(function(){
    //do what you need here
    $('.softLoad').css('visibility', 'visible').hide().fadeIn(250);
}, 250);

});
