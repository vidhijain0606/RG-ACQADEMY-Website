    const carousel = document.getElementById('carousel');
    const slides = carousel.children;
    let currentSlide = 0;

    function showSlide(index) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${index * 100}%)`;
      }
    }
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    // Initialize
    showSlide(currentSlide);
  // contact_us.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');

  // Create feedback message element
  let feedback = document.createElement('div');
  feedback.style.marginTop = '10px';
  feedback.style.fontWeight = 'bold';
  form.appendChild(feedback);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous feedback
    feedback.textContent = '';
    feedback.style.color = '';

    // Get form values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      feedback.textContent = 'Please fill in all fields.';
      feedback.style.color = '#C62828';
      return;
    }

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.style.color = '#C62828';
      return;
    }

    // Simulate sending (replace with AJAX/fetch for real backend)
    feedback.textContent = 'Sending...';
    feedback.style.color = '#FF8900';

    setTimeout(() => {
      feedback.textContent = 'Thank you for contacting us! We will get back to you soon.';
      feedback.style.color = '#388E3C';
      form.reset();
    }, 1200);
  });
});
