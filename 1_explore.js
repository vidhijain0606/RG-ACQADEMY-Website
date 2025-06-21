
    const images = document.querySelectorAll('#activityImages img');
    let current = 2;

    document.getElementById('prevBtn').addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      updateStack();
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      current = (current + 1) % images.length;
      updateStack();
    });

    function updateStack() {
      images.forEach((img, i) => {
        img.style.zIndex = (i === current) ? 3 : (i === (current + 1) % 3 ? 2 : 1);
        img.style.transform = (i === current) ? 'rotate(-3deg)' : (i === (current + 1) % 3 ? 'rotate(5deg)' : 'rotate(-10deg)');
      });
      document.getElementById('slideCounter').textContent = `${current + 1}/5`;
    }

    updateStack(); // Initial call
  // Hide content when clicked on the nav bar 
document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.getElementById("active");
  const carousel = document.querySelector(".activity-container");

  // Toggle visibility on checkbox change
  menuCheckbox.addEventListener("change", function () {
    if (menuCheckbox.checked) {
      carousel.style.display = "none";
    } else {
      carousel.style.display = "flex"; // Use flex to restore original layout
    }
  });
});
