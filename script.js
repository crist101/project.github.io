
var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider2");

function moveDivisor() {
  handle.style.left = slider.value+"%";
	divisor.style.width = slider.value+"%";
  console.log(divisor.style.width);
}

window.onload = function() {
	moveDivisor();
};

let counter = 1;
const numberOfImages = document.getElementsByClassName("imgCheck").length
setInterval(function(){
  document.getElementById('s' + counter).checked = true;
  counter++;
  if(counter > numberOfImages){
    counter = 1;
  }
}, 1000000);

var scroll = document.getElementById("myRange");

scroll.oninput = function () {
	var panel = document.getElementById("galleryScroll");
	
	var total = panel.scrollWidth - panel.offsetWidth;
	var percentage = total*(this.value/100);
	
	console.log(total);
	panel.scrollLeft = percentage;
	//console.log(percentage);
}
