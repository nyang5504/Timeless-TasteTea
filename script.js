// document.getElementById("myElement").addEventListener("mouseover", function() {

// });

const moveUp = (element) => {
  document.getElementById("tea"+element).style.transform = "translateY(-250px)";
  document.getElementById("str"+element).style.transform = "translateY(-250px)";
  document.getElementById("teabag-txt"+element).style.transform = "translateY(-250px)";
  // moveDown((element+1)%3);
  // moveDown((element+2)%3);
}

const moveDown = (element) => {
  document.getElementById("tea"+element).style.transform = "translateY(0)";
  document.getElementById("str"+element).style.transform = "translateY(0)";
  document.getElementById("teabag-txt"+element).style.transform = "translateY(0)";
  document.getElementById("str"+element).style.zindex = 6;
}