const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');

function closeMenu() {
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
  menu.hidden = true;
  overlay.hidden = true;
  document.body.classList.remove('menu-open');
}

function openMenu() {
  toggle.classList.add('open');
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', 'Close menu');
  menu.hidden = false;
  overlay.hidden = false;
  document.body.classList.add('menu-open');
}

toggle.addEventListener('click', () => toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu());
overlay.addEventListener('click', closeMenu);
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 720) closeMenu(); });

function easeOutCubic(value) { return 1 - Math.pow(1 - value, 3); }
function countUp(element, index) {
  const target = Number(element.dataset.target);
  const decimals = Number(element.dataset.decimals);
  const suffix = element.dataset.suffix || '';
  const duration = 1500 + index * 80;
  const startAt = 480 + index * 90;
  window.setTimeout(() => {
    const started = performance.now();
    function update(now) {
      const progress = Math.min((now - started) / duration, 1);
      element.textContent = (target * easeOutCubic(progress)).toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }, startAt);
}

const values = [...document.querySelectorAll('[data-target]')];
const observer = new IntersectionObserver((entries, instance) => {
  if (!entries.some((entry) => entry.isIntersecting)) return;
  values.forEach(countUp);
  instance.disconnect();
}, { threshold: .25 });
observer.observe(document.querySelector('.stats'));

