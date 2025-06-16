document.addEventListener('DOMContentLoaded', function() {
  const rods = document.querySelectorAll('.abacus-rod');
  const loadPercent = document.getElementById('loadPercent');
  let currentRod = 0, step = 0, percent = 0;

  // Each rod: 1 heaven bead, 5 earth beads
  const heavenPositions = [10, 38]; // up, down
  const earthPositions = [50, 30];  // down, up

  function animateRod(rod, rodIndex, callback) {
    const heaven = rod.querySelector('.heaven-bead');
    const earths = rod.querySelectorAll('.earth-bead');
    let beadStep = 0;

    // Heaven bead down, then up
    heaven.style.transform = `translateY(${heavenPositions[1] - heavenPositions[0]}px)`;
    setTimeout(() => {
      heaven.style.transform = `translateY(0px)`;
      updatePercent();
      // Earth beads up one by one, then down
      earths.forEach((earth, i) => {
        setTimeout(() => {
          earth.style.transform = `translateY(-20px)`;
          updatePercent();
          setTimeout(() => {
            earth.style.transform = `translateY(0px)`;
            updatePercent();
            if (i === earths.length - 1) {
              setTimeout(callback, 250);
            }
          }, 220);
        }, i * 220);
      });
    }, 350);
  }

  function updatePercent() {
    percent += 100 / (rods.length * 7);
    loadPercent.textContent = `${Math.min(100, Math.round(percent))}%`;
  }

  function animateNextRod() {
    if (currentRod < rods.length) {
      animateRod(rods[currentRod], currentRod, () => {
        currentRod++;
        setTimeout(animateNextRod, 250);
      });
    } else {
      // Finish loading
      setTimeout(() => {
        document.getElementById('loadingOverlay').style.opacity = '0';
        setTimeout(() => {
          document.getElementById('loadingOverlay').style.display = 'none';
          // Open Explore menu automatically
          const dropdown = document.querySelector('.dropdown-content');
          if(dropdown) dropdown.style.display = 'block';
        }, 700);
      }, 500);
    }
  }

  setTimeout(animateNextRod, 500);
});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.content-img');
  const arrows = document.querySelectorAll('.arrow');
  let currentIndex = 0;
  let interval = null;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('hidden', i !== index);
    });
    arrows.forEach((arrow, i) => {
      arrow.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextImage() {
    showImage((currentIndex + 1) % images.length);
  }

  function prevImage() {
    showImage((currentIndex - 1 + images.length) % images.length);
  }

  function playImages() {
    if (!interval) {
      interval = setInterval(nextImage, 2000); // 2 seconds
    }
  }

  function pauseImages() {
    clearInterval(interval);
    interval = null;
  }

  // Controls
  window.nextImage = nextImage;
  window.prevImage = prevImage;
  window.playImages = playImages;
  window.pauseImages = pauseImages;

  // Arrow navigation
  arrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
      showImage(index);
      pauseImages(); // Optional: pause autoplay on manual navigation
    });
  });

  // Initial state
  showImage(0);
  playImages();

  // Logout button
  document.getElementById('logoutBtn').addEventListener('click', function() {
    alert('You have been logged out!');
  });
});
