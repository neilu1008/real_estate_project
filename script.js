"use strict";
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to the top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      console.log(sectionEL);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    //Close mobile nav
    // if (link.classList.contains("main-nav-link")) {
    //   headerEl.classList.toggle("nav-open");
    // }
  });
});
