$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
  })
});

$('.menu-btn').click(function(){
  $('.navbar .menubar').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

//typing animation
var typed = new Typed(".typing1", {
  strings: ["HTML", "CSS", "Java Script", "JAVA", "REVIT", "BIM", "Mitek", "Solid Build", "TEKLA"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".typing2", {
  strings: ["HTML", "CSS", "Java Script", "JAVA", "REVIT", "BIM", "Mitek", "Solid Build", "TEKLA"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".typing3", {
  strings: ["Pain!", "Passion!", "Patient!", "Ambition!!", "Try on!"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".typing4", {
  strings: ["Gain!", "Dream!", "Happness!", "Smile!!", "Future!"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var maxIndex = $("li.graph-bar").length;

for(var i=0; i<maxIndex; i++){
  var val = $("li.graph-bar").eq(i).attr('graph-val');
  var color = $("li.graph-bar").eq(i).attr('graph-color');
  $("li.graph-bar").eq(i).css({
    "left": (i+1)*80+"px",
    "background":color
  }).animate({
    "height":val+"%"
  },800);
}

let t = 0
bar.style.width = 0
const barAnimation = setInterval(() => {
  bar.style.width =  t + '%'
  t++ >= totalMinwon && clearInterval(barAnimation)
}, 10)