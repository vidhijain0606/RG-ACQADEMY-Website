gsap.registerPlugin(CustomEase);
CustomEase.create("easeMain", "0.65, 0.01, 0.05, 0.99");

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const images = carousel.querySelectorAll("img");
  const angle = 360 / images.length;
  let rotation = 0;

  images.forEach((img, i) => {
    img.style.transform = `rotateY(${i * angle}deg) translateZ(200px)`;
  });

  document.addEventListener("wheel", (e) => {
    rotation += e.deltaY > 0 ? angle : -angle;
    carousel.style.transform = `rotateY(${rotation}deg)`;
  });

  const list = document.querySelector(".list");
  const swipe = new Hammer(document.querySelector(".swipe"));

  function rotateForward() {
    const items = list.querySelectorAll("li");
    list.appendChild(items[0]);
    updateClasses();
  }

  function rotateBackward() {
    const items = list.querySelectorAll("li");
    list.insertBefore(items[2], items[0]);
    updateClasses();
  }

  function updateClasses() {
    const items = list.querySelectorAll("li");
    items.forEach(item => item.className = "");
    items[0].classList.add("prev");
    items[1].classList.add("act");
    items[2].classList.add("next");
  }

  list.onclick = (e) => {
    if (e.target.closest("li")?.classList.contains("next")) rotateForward();
    if (e.target.closest("li")?.classList.contains("prev")) rotateBackward();
  };

  swipe.on("swipeleft", rotateForward);
  swipe.on("swiperight", rotateBackward);
});
