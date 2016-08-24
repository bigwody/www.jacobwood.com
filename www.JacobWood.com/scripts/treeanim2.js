window.onload = function () {
  var canvas1 = document.getElementById("canvas1"),
		context1 = canvas1.getContext("2d"),
		width1 = canvas1.width = window.innerWidth,
		height1 = canvas1.height = window.innerHeight;

  var mode = 0;

  //tree 2 vars
  var p0 = {
    x: width1 / 2,
    y: height1 - 50
  },
		p1 = {
		  x: width1 / 2,
		  y: 50
		},
		branchAngleB,
    branchAngleA1,
		trunkRatio = 0.35,
		tA = Math.PI,
		tAS = 0.01,
		tB = 0,
		tBS = 0.01437;

  window.onclick = function () {
    mode++;
    if (mode > 1)
      mode = 0;
  }

  function randomRange(min, max) {
    return min + Math.random() * (max - min);
  }

  drawTree1();

  function drawTree1() {
    if (mode === 0) {

      context1.clearRect(0, 0, width1, height1);
      branchAngleA1 = Math.cos(tA += tAS) * Math.PI / 2;
      branchAngleB = Math.cos(tB += tBS) * Math.PI / 2;

      tree1(p0, p1, 12);
    }
    requestAnimationFrame(drawTree1);
  }

 
  function tree1(p0, p1, limit) {
    var dx = p1.x - p0.x,
			dy = p1.y - p0.y,
			dist = Math.sqrt(dx * dx + dy * dy),
			angle = Math.atan2(dy, dx),
			branchLength = dist * (1 - trunkRatio),
			pA = {
			  x: p0.x + dx * trunkRatio,
			  y: p0.y + dy * trunkRatio
			},
			pB = {
			  x: pA.x + Math.cos(angle + branchAngleA1) * branchLength,
			  y: pA.y + Math.sin(angle + branchAngleA1) * branchLength
			},
			pC = {
			  x: pA.x + Math.cos(angle + branchAngleB) * branchLength,
			  y: pA.y + Math.sin(angle + branchAngleB) * branchLength
			};

    context1.beginPath();
    context1.moveTo(p0.x, p0.y);
    context1.lineTo(pA.x, pA.y);
    context1.stroke();

    if (limit > 0) {
      tree1(pA, pC, limit - 1);
      tree1(pA, pB, limit - 1);
    }
    else {
      context1.beginPath();
      context1.moveTo(pB.x, pB.y);
      context1.lineTo(pA.x, pA.y);
      context1.lineTo(pC.x, pC.y);
      context1.stroke();
    }
  }
};