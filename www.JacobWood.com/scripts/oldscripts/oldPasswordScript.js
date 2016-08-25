$(document).ready(function () {
  readCookie();
});

function checkIt() {

  var p = 1;
  var t = $('.password').val();
  var e = "rd";
  var a = "pa";
  var cb = "ss";
  var c = "aa";
  var d = "15";
  var dc = "12";
  var b = "wo";
  var f = "23";
  c = cb;
  while (p < 3) {
    if (!t)
      history.go(-1);
    var bb = a + c + b;
    var aa = e + d + f;
    if (t.toLowerCase() == bb + aa) {
      var name = "passwordCookie";
      var value = "1"
      document.cookie = name + "=" + value;
      window.location.href = 'Pages/Home/home.html';
      break;
    }
    p += 1;

    alert('Access Denied - Password Incorrect, Please Try Again.');
  }
  if (t.toLowerCase() != "password" & p == 3)
    window.location.href = 'http://www.google.com';
  return " ";
}

function createCookie() {
  var name = "passwordCookie";
  var value = "1";
  var ca = document.cookie;
  if (!ca.includes("passwordCookie"))
    document.cookie = name + "=" + value;
}

function readCookie(name) {
  var nameEQ = "passwordCookie" + "=";
  var ca = document.cookie;
  if (!ca.includes("passwordCookie=1") && !window.location.href.toUpperCase().includes("INDEX.HTML"))
    window.location.href = "../../index.html";
}

function destroyCookie() {
  var name = "passwordCookie";
  var value = "0"
  document.cookie = name + "=" + value;
}