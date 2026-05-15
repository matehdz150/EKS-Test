import "./style.css";

const app = document.querySelector("#app");

async function renderHealth() {
  const response = await fetch("/api/health");

  const data = await response.json();

  app.innerHTML = `
    <h1>Kubernetes Load Balancing</h1>
    <p>Pod actual:</p>
    <h2>${data.pod}</h2>
  `;
}

setInterval(renderHealth, 1000);

renderHealth().catch(() => {
  app.textContent = "error";
});