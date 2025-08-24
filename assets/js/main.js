
// Set copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Animate skills bars on load
document.querySelectorAll('.skill .bar').forEach(el => {
  const pct = el.getAttribute('data-level') || 0;
  requestAnimationFrame(() => { el.style.setProperty('--w', pct + '%'); });
});

// Simple client-side validation (Contact page)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const errName = document.getElementById('err-name');
    const errEmail = document.getElementById('err-email');
    const errMessage = document.getElementById('err-message');
    const success = document.getElementById('success');

    let ok = true;
    errName.textContent = '';
    errEmail.textContent = '';
    errMessage.textContent = '';
    success.textContent = '';

    if (!name.value || name.value.trim().length < 2) {
      errName.textContent = 'Please enter at least 2 characters.';
      ok = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value || !emailPattern.test(email.value)) {
      errEmail.textContent = 'Please enter a valid email address.';
      ok = false;
    }
    if (!message.value || message.value.trim().length < 10) {
      errMessage.textContent = 'Message should be at least 10 characters.';
      ok = false;
    }

    if (ok) {
      // Simulate success (no backend). Could be replaced with fetch() to form endpoint.
      success.textContent = 'Thanks! Your message was validated locally.';
      form.reset();
    }
  });
}
