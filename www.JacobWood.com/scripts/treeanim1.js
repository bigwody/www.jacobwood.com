﻿//window.onload = function () {
//  var canvas = document.getElementById("canvas1"),
//		context = canvas.getContext("2d"),
//		width = canvas.width = window.innerWidth,
//		height = canvas.height = window.innerHeight;



//  var p0 = {
//    x: 0,
//    y: -321
//  },
//		p1 = {
//		  x: 278,
//		  y: 160
//		},
//		p2 = {
//		  x: -278,
//		  y: 160
//		};
//  var a = 0,
//		b = 0,
//		r = 0,
//		tx, ty;

//  draw();
//  function draw() {
//    context.clearRect(0, 0, width, height);
//    context.save();
//    context.translate(width / 2, height / 2);
//    context.rotate(r += 0.01);
//    tx = .5 + Math.sin(a += .045) * .25;
//    ty = .5 + Math.sin(b += .045) * .25;
//    sierpinski(p0, p1, p2, 7);
//    context.restore();
//    requestAnimationFrame(draw);
//  }

//  function sierpinski(p0, p1, p2, limit) {
//    if (limit > 0) {
//      var pA = {
//        x: p0.x + (p1.x - p0.x) * tx,
//        y: p0.y + (p1.y - p0.y) * ty
//      },
//			pB = {
//			  x: p1.x + (p2.x - p1.x) * tx,
//			  y: p1.y + (p2.y - p1.y) * ty
//			},
//			pC = {
//			  x: p2.x + (p0.x - p2.x) * tx,
//			  y: p2.y + (p0.y - p2.y) * ty
//			};
//      sierpinski(p0, pA, pC, limit - 1);
//      sierpinski(pA, p1, pB, limit - 1);
//      sierpinski(pC, pB, p2, limit - 1);
//    }
//    else {
//      drawTriangle(p0, p1, p2);
//    }
//  }

//  function drawTriangle(p0, p1, p2) {
//    context.beginPath();
//    context.moveTo(p0.x, p0.y);
//    context.lineTo(p1.x, p1.y);
//    context.lineTo(p2.x, p2.y);
//    context.fill();
//  }

//};

window.onload = function () {
  var canvas1 = document.getElementById("canvas1"),
		context1 = canvas1.getContext("2d"),
		width1 = canvas1.width = window.innerWidth,
		height1 = canvas1.height = window.innerHeight;

  var mode = 0;

  //tree 1 vars
  var branchAngleA1 = 0,
		t = 0;

  function randomRange(min, max) {
    return min + Math.random() * (max - min);
  }

  drawTree1();

  function drawTree1() {
    if (mode === 0) {
      
      if (branchAngleA1 > -0.001)
        t = 4.7;

      context1.clearRect(0, 0, width1, height1);      
      branchAngleA1 = -Math.PI / 4 + Math.sin(t += 0.01) * Math.PI / 4;
      
      

      tree1(width1 / 2 - 75, height1, 50, 0, 7);
    }
    requestAnimationFrame(drawTree1);
  }

  function tree1(x, y, size, angle, limit) {
    
    context1.save();
    context1.translate(x, y);
    context1.rotate(angle);
    context1.fillRect(0, 0, size, -size);

    // left branch
    var x0 = 0,
			y0 = -size,
			size0 = Math.abs(Math.cos(branchAngleA1) * size),
			angle0 = branchAngleA1;

    if (limit > 0) {
      tree1(x0, y0, size0, angle0, limit - 1);
    }
    else {
      context1.save();
      context1.translate(x0, y0);
      context1.rotate(angle0);
      context1.fillRect(0, 0, size0, -size0);
      context1.restore();
    }

    //// right branch
    var x1 = x0 + Math.cos(angle0) * size0,
			y1 = y0 + Math.sin(angle0) * size0,
			size1 = Math.abs(Math.sin(branchAngleA1) * size),
      angle1 = angle0 + Math.PI / 2;

    if (limit > 0) {
      tree1(x1, y1, size1, angle1, limit - 1);
    }
    else {
      context1.save();
      context1.translate(x1, y1);
      context1.rotate(angle1);
      context1.fillRect(0, 0, size1, -size1);
      context1.restore();
    }


      context1.restore();
  }

  window.onclick = function() {
    mode++;
    if (mode > 1)
      mode = 0;
  }
};