
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");
});

// Toggle visibility of dropdown menus
document.querySelectorAll('.mobile-menu .toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
  
      const parent = this.parentElement;
      const dropdown = parent.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.display =
          dropdown.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
  
  // Toggle visibility of sub-dropdown menus
  document.querySelectorAll('.dropdown > li > a').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      const subDropdown = this.nextElementSibling;
      if (subDropdown && subDropdown.classList.contains('subdropdown')) {
        e.preventDefault();
        subDropdown.style.display =
          subDropdown.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
  
  // Close all dropdowns if clicking outside the menu
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.main-menu')) {
      document.querySelectorAll('.dropdown, .subdropdown').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });
  