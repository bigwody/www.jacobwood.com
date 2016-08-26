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
      tree1(x0, y0, size0,angle0, limit - 1);
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