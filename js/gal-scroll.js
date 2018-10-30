$(document).ready(function(){
   $('body').attr("onscroll", "galScroll()");
});

function galScroll() {
  var atTop = true;
  var vScroll = document.scrollingElement.scrollTop;

  if (vScroll >= 75) {
    atTop = false;
  } else {
    atTop = true;
  }

  if (atTop === true) {
    document.getElementById('gal-scrollt').style.display = 'none';
    document.getElementById('gal-scrollb').style.display = 'flex';
  } else {
    document.getElementById('gal-scrollt').style.display = 'flex';
    document.getElementById('gal-scrollb').style.display = 'none';
  }
  //console.log(atTop);
  //console.log(vScroll);
}
