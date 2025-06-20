const carousel = document.getElementById("carousel");
const images = carousel.querySelectorAll("img");
const imageCount = images.length;
const angleStep = 360 / imageCount;
let rotation = 0;

// Arrange images in a circular 3D layout
images.forEach((img, i) => {
  const angle = i * angleStep;
  img.style.transform = `rotateY(${angle}deg) translateZ(250px)`;
});

// Rotate the entire carousel on scroll
document.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    rotation += angleStep;
  } else {
    rotation -= angleStep;
  }
  carousel.style.transform = `rotateY(${rotation}deg)`;
});
