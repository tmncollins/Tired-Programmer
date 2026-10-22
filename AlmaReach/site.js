// Shared behaviour for every page: menu, tabs, nav shadow, scroll reveal.

document.documentElement.classList.add("js");

// Mobile menu
const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    burger.setAttribute("aria-expanded", burger.classList.contains("active"));
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("active");
    });
  });
}

// Highlight the current page in the nav
const page = location.pathname.split("/").pop().replace(".html", "") || "index";
document.querySelectorAll(".desktop-nav a, .menu-links a").forEach(link => {
  const target = link.getAttribute("href").split("#")[0].replace(".html", "");
  if (target === page && !link.getAttribute("href").includes("#")) {
    link.classList.add("current");
  }
});

// Nav border once the page scrolls
const nav = document.querySelector(".nav");
if (nav) {
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Tabs (home "Tailored Solutions", blog)
const tabs = document.querySelectorAll(".feature-tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Fade sections in as they scroll into view
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add("in"));
}

// Hero profile stack: bring the next example profile to the front every few seconds
const stack = document.querySelector(".profile-stack");
if (stack && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const cards = [...stack.querySelectorAll(".pcard")];
  setInterval(() => {
    cards.forEach(c => { c.dataset.pos = (Number(c.dataset.pos) + cards.length - 1) % cards.length; });
  }, 4500);
}
