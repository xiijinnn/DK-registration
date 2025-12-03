const menuBtn = document.getElementById("menu-btn");
  const navPanel = document.getElementById("navPanel");
  const navOverlay = document.getElementById("navOverlay");
  const navClose = document.getElementById("navClose");

  function openNav() {
    navPanel.setAttribute("aria-hidden", "false");
    navOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    navPanel.setAttribute("aria-hidden", "true");
    navOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (menuBtn) menuBtn.addEventListener("click", openNav);
  if (navClose) navClose.addEventListener("click", closeNav);
  if (navOverlay) navOverlay.addEventListener("click", closeNav);

  // ====== Smooth Scrolling for Anchor Links ======
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        closeNav(); // Close panel after clicking a link (mobile)
      }
    });
  });

  // ====== View Rules Button Scroll ======
  const viewScheduleBtn = document.getElementById("viewSchedule");
  if (viewScheduleBtn) {
    viewScheduleBtn.addEventListener("click", () => {
      const rulesSection = document.getElementById("rules");
      if (rulesSection) {
        rulesSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // ====== Sticky Header on Scroll ======
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  // ====== Fade-in Animation on Scroll ======
  const sections = document.querySelectorAll(".section, .hero");
  const revealOnScroll = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load
;