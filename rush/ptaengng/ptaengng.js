document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".header");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > window.innerHeight / 1.5) {
        navbar.style.opacity = "1"; // แสดง Navbar
      } else {
        navbar.style.opacity = "0"; // ซ่อน Navbar
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");
  
    function changeActiveLink() {
      let current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", changeActiveLink);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const checkBox = document.getElementById("check");
    const navLinks = document.querySelectorAll(".navbar a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        checkBox.checked = false; // ปิดเมนูเมื่อกดลิงก์
      });
    });
  });
  