(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const init = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', init);
  btn.setAttribute('aria-pressed', init === 'dark');

  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', current);
    btn.setAttribute('aria-pressed', current === 'dark');
    localStorage.setItem('theme', current);
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
