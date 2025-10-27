const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

/* --- Base Functions --- */
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

function updateMenuButton() {
  if (isSidebarOpen()) {
    menuBtn.textContent = 'Close Menu';
  } else {
    menuBtn.textContent = 'Open Menu';
  }
}

function handleMenuClick() {
  toggleSidebar();
  updateMenuButton();
}

function handleOverlayClick() {
  closeSidebar();
  updateMenuButton();
}

function initSidebarMenu() {
  menuBtn.addEventListener('click', handleMenuClick);
  overlay.addEventListener('click', handleOverlayClick);
}

/* --- Extra Useful Sidebar Functions --- */

//  Close sidebar when pressing "Escape"
function handleKeyPress(event) {
  if (event.key === 'Escape' && isSidebarOpen()) {
    closeSidebar();
    updateMenuButton();
  }
}
document.addEventListener('keydown', handleKeyPress);

// Highlight active link in sidebar
function highlightActiveLink(linkId) {
  const links = sidebar.querySelectorAll('a');
  links.forEach(link => link.classList.remove('active'));
  const activeLink = sidebar.querySelector(#${linkId});
  if (activeLink) activeLink.classList.add('active');
}

// Automatically open sidebar on large screens
function autoOpenOnDesktop() {
  if (window.innerWidth >= 1024) {
    openSidebar();
    updateMenuButton();
  }
}

// Automatically close sidebar on small screens
function autoCloseOnMobile() {
  if (window.innerWidth < 1024) {
    closeSidebar();
    updateMenuButton();
  }
}
window.addEventListener('resize', () => {
  autoOpenOnDesktop();
  autoCloseOnMobile();
});

// Toggle dark mode on sidebar
function toggleSidebarTheme() {
  sidebar.classList.toggle('dark-mode');
}

// Change sidebar width
function setSidebarWidth(width) {
  sidebar.style.width = width;
}

// Animate sidebar opening
function animateSidebar() {
  sidebar.style.transition = 'all 0.3s ease';
}

// Disable scroll when sidebar is open
function disableScroll() {
  document.body.style.overflow = 'hidden';
}

// Enable scroll when sidebar is closed
function enableScroll() {
  document.body.style.overflow = 'auto';
}

//  Toggle scroll based on sidebar state
function toggleScroll() {
  if (isSidebarOpen()) {
    disableScroll();
  } else {
    enableScroll();
  }
}

initSidebarMenu();
animateSidebar();
