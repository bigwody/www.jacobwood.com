$( document ).ready(function() {
      
  var step = 4;
  var ms = 60;  // loop every
  var $uni = $('.unicorn');
  var txt = $uni.text();
  var len = txt.length;
  var lev = 360 / len;
  var newCont = "";
  var itv;
  var h;

  for (var i = 0; i < len; i++) {
    newCont += "<span style='color:hsla(" + i * lev + ", 100%, 50%, 1)'>" + txt.charAt(i) + "</span>";
  }

  $uni.html(newCont); // Replace with new content
  var $ch = $uni.find('span'); // character

  function anim() {
    itv = setInterval(function () {
      $ch.each(function () {
        h = +$(this).attr('style').split(',')[0].split('(')[1] - step % 360;
        $(this).attr({ style: "color:hsla(" + h + ", 100%, 50%, 1)" });
      });
    }, ms);
        
  }

  function stop() {
    clearInterval(itv);
  }

  //$uni.hover(anim,stop);
  anim();
});