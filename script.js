const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

/* Dto Yung mga functions */

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('show');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
}

function toggleSidebar() {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
}

function isSidebarOpen() {
  return sidebar.classList.contains('open');
}

function showOverlay() {
  overlay.classList.add('show');
}

function hideOverlay() {
  overlay.classList.remove('show');
}

//Pang update Ng button pag clinick
function updateMenuButton() {
  if (isSidebarOpen()) {
    menuBtn.textContent = 'Close Menu';
  } else {
    menuBtn.textContent = 'Open Menu';
  }
}

// Handle menu
function handleMenuClick() {
  toggleSidebar();
  updateMenuButton();
}

// Handle overlay click
function handleOverlayClick() {
  closeSidebar();
  updateMenuButton();
}

function initSidebarMenu() {
  menuBtn.addEventListener('click', handleMenuClick);
  overlay.addEventListener('click', handleOverlayClick);
}

initSidebarMenu();