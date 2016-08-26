window.onpaint = readCookie();
var p = 0;

function checkIt() {
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

  var bb = a + c + b;
  var aa = e + d + f;
  if (t.toLowerCase() == (bb + aa)) {
    createCookie("loggedIn", 1, 1);
    window.location.href = 'Pages/Home/home.html';
  } else {
    p += 1;
    alert('Access Denied - Password Incorrect, Please Try Again.');
    if (p == 3)
      window.location.href = 'http://www.google.com';
  }
}

function createCookie() {
  createCookie1("loggedIn", 1, 1);
}

function readCookie(name) {
  //alert(getCookie("loggedIn"));
  //alert(document.cookie);
  //if (getCookie("loggedIn") != 1)
  //  alert("cookie not equal to 1");
  //if (!window.location.href.toUpperCase().includes("INDEX.HTML"))
  //  alert("cookie location doesn't include index.html");
  if (getCookie("loggedIn") != 1 && !window.location.href.toUpperCase().includes("INDEX.HTML"))
    window.location.href = "../../index.html";
}

function destroyCookie() {
  createCookie1("loggedIn", 0, 1);
}

function createCookie1(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}