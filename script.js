let slideImages = document.querySelectorAll(".slides img");
var counter = 0;
function slideNext() {
  slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
}

function autoSliding() {
  deletInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
  }
}
autoSliding();
