document.ready = function () {
  $.get("../templates/header.html", function (data) {
    $("#header").html(data);
  });
};