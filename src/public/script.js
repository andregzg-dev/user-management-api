const API_URL = "http://localhost:3000";

/* LOGIN */
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const messageEl = document.getElementById("message");

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } catch (err) {
    messageEl.innerText = err.message;
  }
}

/* REGISTER */
async function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msgEl = document.getElementById("msg");

  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  msgEl.innerText = data.message;

  if (response.status === 201) {
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  }
}

/* DASHBOARD */
async function loadDashboard() {
  const token = localStorage.getItem("token");
  const userEmailEl = document.getElementById("userEmail");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!userEmailEl || !logoutBtn) return;

  if (!token) {
    userEmailEl.innerText = "Not authenticated";
    return;
  }

  const response = await fetch(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await response.json();

  if (!response.ok) {
    userEmailEl.innerText = "Unauthorized";
    return;
  }

  userEmailEl.innerText = `Welcome, ${data.user.email}`;

  logoutBtn.onclick = () => {
    localStorage.removeItem("token");
    window.location.href = "login.html";
  };
}

document.addEventListener("DOMContentLoaded", loadDashboard);
