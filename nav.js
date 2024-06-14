document.addEventListener("DOMContentLoaded", function () {
  fetch("/nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", data);

      const navToggle = document.getElementById("navToggle");
      const navModal = document.getElementById("navModal");
      const closeNav = document.getElementById("closeNav");

      navToggle.addEventListener("click", () => {
        navModal.classList.remove("hidden");
      });

      closeNav.addEventListener("click", () => {
        navModal.classList.add("hidden");
      });

      // Close modal when clicking outside the nav
      window.addEventListener("click", (event) => {
        if (event.target == navModal) {
          navModal.classList.add("hidden");
        }
      });
    })
    .catch((error) => console.error("Error loading navigation:", error));
});
