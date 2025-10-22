document.addEventListener("DOMContentLoaded", () => {
  const profileMenu = document.getElementById("profileMenu");
  const dropdown = document.getElementById("profileDropdown");
  const caret = profileMenu.querySelector(".caret");

  profileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("show");
    caret.style.transform = dropdown.classList.contains("show")
      ? "rotate(180deg)"
      : "rotate(0deg)";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!profileMenu.contains(e.target)) {
      dropdown.classList.remove("show");
      caret.style.transform = "rotate(0deg)";
    }
  });

  // Logout redirect (frontend only)
  const logoutBtn = document.querySelector(".logout");
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("You have been logged out.");
   window.location.href = "../index.html";
  });
});
