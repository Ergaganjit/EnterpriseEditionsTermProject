document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".slider");
  var instances = M.Slider.init(elems, options);
});
var instance = M.Slider.getInstance(elem);
instance.pause();
instance.start();
instance.next();
instance.prev();
instance.destroy();
