// ===================================
// Text Formatting - Prevent Orphan Words
// ===================================

(function() {
  "use strict";

  // Unorphanize - Prevent text widows/orphans
  function unorphanize() {
    try {
      document.querySelectorAll("p, h1, h2, h3, li, .prevent-orphan").forEach((element) => {
        try {
          if (element.classList.contains("no-wrap")) return;
          const content = element.innerHTML;
          element.innerHTML = content.replace(/ ([^ ]*)$/, "&nbsp;$1");
        } catch (error) {}
      });
    } catch (error) {}
  }

  // Initialize on page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", unorphanize);
  } else {
    unorphanize();
  }
})();
