// Benefits data
const benefits = [
  { title: "Improves Calculation Speed", desc: "Abacus practice helps children perform calculations faster and with greater accuracy." },
  { title: "Boosts Memory", desc: "Regular abacus use strengthens memory and recall abilities." },
  { title: "Enhances Concentration", desc: "Focus is improved as children learn to visualize and manipulate beads mentally." },
  { title: "Develops Analytical Thinking", desc: "Abacus training encourages logical reasoning and problem-solving." },
  { title: "Strengthens Visualization", desc: "Children learn to picture numbers and operations, boosting imagination." },
  { title: "Builds Confidence", desc: "Mastering abacus skills increases self-esteem in academics." },
  { title: "Promotes Left & Right Brain Use", desc: "Abacus learning stimulates both hemispheres for balanced development." },
  { title: "Encourages Creativity", desc: "Creative approaches to math are fostered through abacus games." },
  { title: "Enhances Listening Skills", desc: "Following instructions and auditory exercises improve listening." },
  { title: "Reduces Math Anxiety", desc: "Abacus makes math fun and approachable, reducing fear." },
  { title: "Improves Academic Performance", desc: "Better math skills translate to higher scores in school." },
  { title: "Life-long Skill", desc: "Abacus skills benefit students in all walks of life." }
];

// Open modal on bead click
document.querySelectorAll('.bead').forEach(bead => {
  bead.addEventListener('click', function() {
    const idx = parseInt(this.getAttribute('data-benefit'));
    document.getElementById('modalTitle').textContent = benefits[idx].title;
    document.getElementById('modalDesc').textContent = benefits[idx].desc;
    const modal = document.getElementById('benefitModal');
    modal.classList.add('open');
    modal.style.display = 'flex';
  });
});

// Close modal on close button
document.getElementById('closeModal').onclick = function() {
  const modal = document.getElementById('benefitModal');
  modal.classList.remove('open');
  setTimeout(() => { modal.style.display = 'none'; }, 500); // matches transition
};

// Close modal when clicking outside modal-content
window.onclick = function(event) {
  const modal = document.getElementById('benefitModal');
  if (event.target === modal) {
    modal.classList.remove('open');
    setTimeout(() => { modal.style.display = 'none'; }, 500);
  }
};
