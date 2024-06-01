/*
* A Pen by Daylily on CodePen.
License.
https://codepen.io/daylilystudio/pen/poWrbOO
*/

function snowyFu() {
  var c = document.getElementById('canvas'),
    $ = c.getContext("2d");
  var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight;
  $.clearRect(0, 0, canvas.width, canvas.height);
  //c.fillStyle = 'rgba(255, 255, 255, 0.5)';
  //c.globalCompositeOperation = "lighter";
  Snowy();
  function Snowy() {
    if (document.body.clientWidth > 767) {
      var snow, arr = [];
      var num = 100, tsc = 1, sp = 1;
      var sc = 0.8, t = 0, mv = 0, min = 1;
    } else {
      var snow, arr = [];
      var num = 200, tsc = 1, sp = 1;
      var sc = 0.3, t = 0, mv = 0, min = 0.5;
    }
    for (var i = 0; i < num; ++i) {
      snow = new Flake();
      snow.y = Math.random() * (h + 50);
      snow.x = Math.random() * w;
      snow.t = Math.random() * (Math.PI * 2);
      snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
      snow.sp = (Math.pow(snow.sz * 0.2, 2) * .015) * sp;
      snow.sp = snow.sp < min ? min : snow.sp;
      arr.push(snow);
    }
    go();
    function go() {
      window.requestAnimationFrame(go);
      $.clearRect(0, 0, w, h);
      //      $.fillStyle = 'hsla(242, 95%, 3%, 1)';
      //      $.fillStyle = 'hsla(0deg 91% 61% 1)';
      $.fillRect(0, 0, w, h);
      $.fill();
      for (var i = 0; i < arr.length; ++i) {
        f = arr[i];
        f.t += .005;
        f.t = f.t >= Math.PI * 2 ? 0 : f.t;
        f.y += f.sp;
        f.x += Math.sin(f.t * tsc) * (f.sz * .3);
        if (f.y > h + 50) f.y = -10 - Math.random() * mv;
        if (f.x > w + mv) f.x = - mv;
        if (f.x < - mv) f.x = w + mv;
        f.draw();
      }
    }

    function Flake() {
      this.draw = function () {
        this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
        //      this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
        //      this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
        this.g.addColorStop(0, 'hsla(52,33%,53%,1)');
        this.g.addColorStop(1, 'hsla(36,40%,58%,0)');
        $.moveTo(this.x, this.y);
        $.fillStyle = this.g;
        $.beginPath();
        $.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
        $.fill();
      }
    }
  }
  /*________________________________________*/
  window.addEventListener('resize', function () {
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight;
  }, false);
};
window.addEventListener('load', function () {
  setTimeout(function () {
    snowyFu();
  }, 2000);
})