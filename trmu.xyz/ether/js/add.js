function slide(id) {
  var temp = document.getElementById(id);

  temp.style.animation = "slide .25s cubic-bezier(0,1,1,1) 0s 1 normal forwards";

  temp.addEventListener("animationend", function () {
    temp.style.backgroundImage = 'url("images/reserve/check.png")';
    temp.style.animation = "slider .25s cubic-bezier(0,1,1,1) 0s 1 normal forwards";
    temp.setAttribute("onclick", "slide2('" + id + "');");
  });
}

function slide2(id) {
  var temp = document.getElementById(id);

  temp.style.animation = "slide .25s cubic-bezier(0,1,1,1) 0s 1 normal forwards";

  temp.addEventListener("animationend", function () {
    temp.style.backgroundImage = 'url("images/reserve/plus.png")';
    temp.style.animation = "slider .25s cubic-bezier(0,1,1,1) 0s 1 normal forwards";
    temp.setAttribute("onclick", "slide('" + id + "');");
  });
}
