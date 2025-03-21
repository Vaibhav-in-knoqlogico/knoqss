document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menu = document.querySelector(".navbar .menu");

  hamburgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  const dropdownLinks = document.querySelectorAll(
    "#services-link, #insights-link, #products-link"
  );

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      if (window.innerWidth <= 1048) {
        event.preventDefault();
        const dropdownId = link.id.replace("-link", "-dropdown");
        const mobileDropdown = document.querySelector(
          `#${dropdownId}.dropdown-menu-mobile-view`
        );

        dropdownLinks.forEach((otherLink) => {
          if (otherLink !== link) {
            const otherId = otherLink.id.replace("-link", "-dropdown");
            const otherMobileDropdown = document.querySelector(
              `#${otherId}.dropdown-menu-mobile-view`
            );
            if (otherMobileDropdown) {
              otherMobileDropdown.style.display = "none";
            }
          }
        });

        if (mobileDropdown) {
          mobileDropdown.style.display =
            mobileDropdown.style.display === "none" ? "flex" : "none";

          document.body.style.overflow =
            mobileDropdown.style.display === "flex" ? "hidden" : "";
        }
      }
    });
  });

  const innerDropdowns = document.querySelectorAll(
    ".inner-dropdown-mobile-view"
  );
  innerDropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("#sud-header");
    const subMenu = dropdown.querySelector(".sub-menu");

    if (link && subMenu) {
      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 1048) {
          e.preventDefault();
          e.stopPropagation();

          innerDropdowns.forEach((other) => {
            const otherSubMenu = other.querySelector(".sub-menu");
            if (otherSubMenu && otherSubMenu !== subMenu) {
              otherSubMenu.style.display = "none";
            }
          });

          subMenu.style.display =
            subMenu.style.display === "block" ? "none" : "block";
        }
      });
    }
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 1048) {
      if (!event.target.closest(".menu")) {
        const allDropdowns = document.querySelectorAll(
          ".dropdown-menu-mobile-view, #insights-dropdown, #products-dropdown"
        );
        allDropdowns.forEach((dropdown) => {
          dropdown.style.display = "none";
        });

        const allSubMenus = document.querySelectorAll(".sub-menu");
        allSubMenus.forEach((subMenu) => {
          subMenu.style.display = "none";
        });

        if (!event.target.closest(".hamburger-menu")) {
          menu.classList.remove("active");
        }
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1048) {
      menu.classList.remove("active");
      const allDropdowns = document.querySelectorAll(
        ".dropdown-menu, .dropdown-menu-mobile-view, #insights-dropdown, #products-dropdown, .sub-menu"
      );
      allDropdowns.forEach((dropdown) => {
        dropdown.style.display = "";
      });
    }
  });
});

let prods_dropdown = document.getElementById("products-dropdown");
let prods_link = document.getElementById("products-link");
let insights_dropdown = document.getElementById("insights-dropdown");
let insights_link = document.getElementById("insights-link");
let trainings_dropdown = document.getElementById("trainings-dropdown");
let trainings_link = document.getElementById("trainings-link");

prods_link.addEventListener("click", function (event) {
  event.preventDefault();
  prods_dropdown.style.display =
    prods_dropdown.style.display === "none" ? "flex" : "none";
});

insights_link.addEventListener("click", function (event) {
  event.preventDefault();
  insights_dropdown.style.display =
    insights_dropdown.style.display === "none" ? "flex" : "none";
});

trainings_link.addEventListener("click", function (event) {
  event.preventDefault();
  trainings_dropdown.style.display =
    trainings_dropdown.style.display === "none" ? "flex" : "none";
});
