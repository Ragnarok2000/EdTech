const toggleMobile = document.getElementById('darkModeToggle');
const toggleDesktop = document.getElementById('darkModeToggleDesktop');

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  const icon = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  toggleMobile.innerHTML = icon;
  toggleDesktop.innerHTML = icon;
}

toggleMobile.addEventListener('click', toggleDarkMode);
toggleDesktop.addEventListener('click', toggleDarkMode);
