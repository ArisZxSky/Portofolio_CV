function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
window.addEventListener('click', function(e) {
    const menu = document.getElementById("menu");
    const button = document.querySelector(".menu-btn");
    if (!menu.contains(e.target) && !button.contains(e.target)) {
      menu.style.display = "none";
    }
  });