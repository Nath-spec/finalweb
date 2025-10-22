const modal = document.getElementById('authModal');
    const bookBtn = document.getElementById('bookBtn');
    const bookNow = document.getElementById('bookNow');
    const toRegister = document.getElementById('toRegister');
    const toLogin = document.getElementById('toLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    bookBtn.onclick = bookNow.onclick = () => modal.style.display = 'flex';
    modal.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; };

    toRegister.onclick = () => {
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    };
    toLogin.onclick = () => {
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
    };
// =======================
// 🟢 LOGIN REDIRECTION LOGIC
// =======================

document.getElementById('loginBtn').addEventListener('click', function (e) {
  e.preventDefault(); // prevent form reload

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const role = document.getElementById('role')?.value; // if may dropdown

  // --- Option A: if may <select id="role">
  if (role) {
    if (role === "admin") {
      window.location.href = "ADMIN/admin.html";
    } else if (role === "doctor") {
      window.location.href = "DOCTOR/doctor.html";
    } else if (role === "patient") {
      window.location.href = "PATIENT/patient.html";
    } else {
      alert("Please select a valid role!");
    }
  } 
  // --- Option B: if gusto mong auto-detect via username prefix
  else {
    if (username.startsWith("admin")) {
      window.location.href = "ADMIN/admin.html";
    } else if (username.startsWith("doc")) {
      window.location.href = "DOCTOR/doctor.html";
    } else if (username.startsWith("pat")) {
      window.location.href = "PATIENT/patient.html";
    } else {
      alert("Invalid credentials or user type!");
    }
  }
});

