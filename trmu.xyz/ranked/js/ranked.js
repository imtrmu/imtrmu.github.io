var mainArray = [];

function grab() {
  const tempArray = [];
  var input = document.getElementsByName("array[]");
  console.log(input);
  for (var i = 0; i < input.length; i++) {
    var a = input[i];
    tempArray[i] = a.value;
  }
  console.log(tempArray);
  // test for actual input
  if (tempArray[0] == "") {
  } else {
    var elotemp = "";
    var total = 0;
    var weightTotal = 0;
    // CHECK IF RANKED, IF NOT THEN DONT USE FOR MATH
    if (tempArray[1] != 0) {
      total = total + tempArray[1] * 4;
      weightTotal = weightTotal + 3.5;
    }
    if (tempArray[2] != 0) {
      total = total + tempArray[2] * 3;
      weightTotal = weightTotal + 3;
    }
    if (tempArray[3] != 0) {
      total = total + tempArray[3] * 3;
      weightTotal = weightTotal + 3;
    }
    console.log(total);
    console.log(weightTotal);
    //FIND ELO
    elotemp = (total / weightTotal).toFixed(2);
    // elotemp = Math.floor(total / weightTotal).toFixed(2);
    if (total == 0) {
      elotemp = 0;
    }
    console.log(elotemp);
    tempArray.push(elotemp);
    console.log(tempArray);
    mainArray.push(tempArray);
    sort(mainArray);
  }
}
function sort(x) {
  console.log(mainArray);
  var sortedArray = mainArray.sort(function (a, b) {
    return b[4] - a[4];
  });
  mainArray = sortedArray;
  console.log(mainArray);
  draw(mainArray);
}

function draw(x) {
  var paras = document.getElementsByClassName("list");

  while (paras[0]) {
    paras[0].parentNode.removeChild(paras[0]);
  }
  for (var i = 0; i < x.length; i++) {
    var box = document.getElementById("main");
    var div = document.createElement("div");
    div.setAttribute("class", "list");
    div.setAttribute("id", "p" + i);
    div.innerHTML =
      '<h2 class="playerName">' +
      x[i][0] +
      '</h2><div class="vbr"></div><div class="imgWrap"><img src="rankIcons/' +
      x[i][1] +
      '.png" /></div><div class="vbr"></div><div class="imgWrap"><img src="rankIcons/' +
      x[i][2] +
      '.png" /></div><div class="vbr"></div><div class="imgWrap"><img src="rankIcons/' +
      x[i][3] +
      '.png" /></div><div class="vbr"></div><h2 class="elo">' +
      x[i][4] +
      '</h2><div class="removePlayer" onClick="remove(' +
      i +
      ')">x</div>';
    box.appendChild(div);
  }
  var bottom = document.getElementById("playerListBottom");
  var main2 = document.getElementById("main");
  bottom.remove();
  var add = document.createElement("div");
  add.setAttribute("id", "playerListBottom");
  main2.appendChild(add);
}

function remove(x) {
  console.log(mainArray + "!!");
  mainArray.splice(x, 1);
  sort(mainArray);
}
