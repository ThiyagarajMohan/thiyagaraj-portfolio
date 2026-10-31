// Wait until the HTML document has loaded before using its elements.
document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation menu
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-link");

  menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  // Close the mobile menu after choosing a section.
  navItems.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  // Show elements as they enter the screen.
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  } else {
    // Fallback for older browsers.
    revealElements.forEach(function (element) {
      element.classList.add("visible");
    });
  }

  // Highlight the navigation link for the section currently on screen.
  const sections = document.querySelectorAll("main section[id]");
  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navItems.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  // Keep the footer year current.
  document.getElementById("year").textContent = new Date().getFullYear();

  // Small typing animation in the hero heading.
  const typedText = document.getElementById("typedText");
  const words = ["Developer", "Problem Solver", "Lifelong Learner"];
  let wordIndex = 0;
  let characterIndex = words[0].length;
  let deleting = true;

  function typeNextWord() {
    const currentWord = words[wordIndex];

    if (deleting) {
      characterIndex--;
      typedText.textContent = currentWord.substring(0, characterIndex);
      if (characterIndex <= 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeNextWord, 350);
        return;
      }
    } else {
      const nextWord = words[wordIndex];
      characterIndex++;
      typedText.textContent = nextWord.substring(0, characterIndex);
      if (characterIndex >= nextWord.length) {
        deleting = true;
        setTimeout(typeNextWord, 1500);
        return;
      }
    }
    setTimeout(typeNextWord, deleting ? 55 : 90);
  }

  // Respect the visitor's reduced-motion preference.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setTimeout(typeNextWord, 1800);
  }
});
