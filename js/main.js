// Accordion
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.accordion-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Modal
const overlay = document.getElementById('modal-overlay');
document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    overlay && overlay.classList.add('open');
  });
});
document.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
  el.addEventListener('click', e => {
    if (e.target === el) overlay && overlay.classList.remove('open');
  });
});

// Mobile nav
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('header-nav');
hamburger && hamburger.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
});

// Active nav link
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.header-nav a').forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === current) a.classList.add('active');
});

// Form submit (Bitrix24 webhook placeholder)
document.querySelectorAll('.js-form').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const original = btn.textContent;
    btn.textContent = 'Отправляем...';
    btn.disabled = true;

    const data = Object.fromEntries(new FormData(form));

    try {
      // Здесь будет webhook URL Битрикс24
      // await fetch('BITRIX24_WEBHOOK_URL', { method: 'POST', body: JSON.stringify(data) });
      btn.textContent = '✓ Заявка отправлена!';
      btn.style.background = '#4caf50';
      form.reset();
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    } catch {
      btn.textContent = 'Ошибка. Попробуйте ещё раз.';
      btn.disabled = false;
    }
  });
});
