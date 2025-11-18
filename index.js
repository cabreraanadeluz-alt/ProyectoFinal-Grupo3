document.addEventListener("DOMContentLoaded", () => {
  const navBtns = document.querySelectorAll(".nav-btn");

  navBtns.forEach(btn => {

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = btn.dataset.id;
      const section = document.getElementById(targetId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});