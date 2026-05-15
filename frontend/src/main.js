import "./style.css";

const app = document.querySelector("#app");

async function renderHealth() {
  const response = await fetch("/api/health");
  const health = await response.text();

  app.textContent = health;
}

renderHealth().catch(() => {
  app.textContent = "error";
});
