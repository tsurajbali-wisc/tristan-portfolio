const modal = document.querySelector('.modal');
if (modal) {
  const modalImg = modal.querySelector('img');
  document.querySelectorAll('[data-zoom]').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt || '';
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  const close = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };
  modal.querySelector('button').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
