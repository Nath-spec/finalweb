// =======================
// 🔵 PROFILE DROPDOWN
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const profile = document.querySelector(".profile");
  const dropdown = document.querySelector(".profile-dropdown");
  const caret = document.querySelector(".caret");

  if (profile && dropdown) {
    profile.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
      caret.style.transform = dropdown.classList.contains("show")
        ? "rotate(180deg)"
        : "rotate(0deg)";
    });

    // close dropdown when clicking outside
    document.addEventListener("click", () => {
      dropdown.classList.remove("show");
      caret.style.transform = "rotate(0deg)";
    });
  }
});

// =======================
// 🩺 ACCEPT / DECLINE APPOINTMENTS (Frontend only)
// =======================
document.querySelectorAll(".btn-accept").forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = btn.closest("tr");
    row.querySelector(".status").textContent = "Approved";
    row.querySelector(".status").style.background = "#dcfce7";
    row.querySelector(".status").style.color = "#166534";
    btn.disabled = true;
    btn.nextElementSibling.disabled = true;
    alert("Appointment Approved ✅");
  });
});

document.querySelectorAll(".btn-decline").forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = btn.closest("tr");
    row.querySelector(".status").textContent = "Declined";
    row.querySelector(".status").style.background = "#fee2e2";
    row.querySelector(".status").style.color = "#991b1b";
    btn.disabled = true;
    btn.previousElementSibling.disabled = true;
    alert("Appointment Declined ❌");
  });
});

// =======================
// 💬 CHAT FEATURE (simple frontend simulation)
// =======================
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");
const chatList = document.querySelectorAll(".chat-item");

if (chatForm && chatInput && chatBox) {
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const msgText = chatInput.value.trim();
    if (!msgText) return;

    const msg = document.createElement("div");
    msg.className = "msg doctor";
    msg.innerHTML = `<div class="msg-text">${msgText}</div><div class="msg-time">Just now</div>`;
    chatBox.appendChild(msg);
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // fake reply after 2s
    setTimeout(() => {
      const reply = document.createElement("div");
      reply.className = "msg patient";
      reply.innerHTML = `<div class="msg-text">Got it, doc!</div><div class="msg-time">Just now</div>`;
      chatBox.appendChild(reply);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 2000);
  });
}

// =======================
// 👥 SWITCH CHAT BETWEEN PATIENTS
// =======================
function selectChat(el, name) {
  document.querySelectorAll(".chat-item").forEach((i) => i.classList.remove("active"));
  el.classList.add("active");

  const chatWith = document.getElementById("chatWith");
  if (chatWith) chatWith.textContent = name;

  // reset chat box
  if (chatBox) {
    chatBox.innerHTML = `
      <div class="msg patient">
        <div class="msg-text">Hi Doc ${name.split(" ")[0]}!</div>
        <div class="msg-time">Just now</div>
      </div>
    `;
  }
}
  const logoutBtn = document.querySelector(".logout");
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("You have been logged out.");
   window.location.href = "../index.html";
  });