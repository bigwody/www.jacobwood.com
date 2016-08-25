//some code from here - http://stackoverflow.com/questions/19165364/cycling-animation-of-rainbow-coloured-text
//much modification
$(document).ready(function () {
  UpdateValues();
});

var itv;

function UpdateValues() {
  clearInterval(itv);
  var step = document.getElementById('inputSpeed').value;
  var lev = document.getElementById('inputLevel').value;
  var ms = 30;  // loop every
  var $uni = $('.unicorn');

  if (isNaN(lev) || lev == 0) {
    alert("Level must be a number not equal to 0");
    return;
  }

  Array.from(document.getElementsByClassName("unicorn")).forEach(function (item) {

    var newContent = "";
    var text = item.textContent
    lev = text.length / lev;
    for (var j = 0; j < text.length; j++) {
      newContent += "<span style='color:hsla(" + j * lev + ", 100%, 50%, 1)'>" + text.charAt(j) + "</span>";
    }
    item.innerHTML = newContent;
  });

  var $ch = $uni.find('span'); // character
  itv = setInterval(function () {
    $ch.each(function () {
      h = +$(this).attr('style').split(',')[0].split('(')[1] - step % 360;
      $(this).attr({ style: "color:hsla(" + h + ", 100%, 50%, 1)" });
    });
  }, ms);
}