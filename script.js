const form = document.querySelector("#pledge-form");
const status = document.querySelector(".form-status");
const heartWall = document.querySelector("#heart-wall");
const highlightNumbers = document.querySelectorAll("[data-count]");
const pledgeButton = form?.querySelector("button[type='submit']");

const hearts = [
  "Amina",
  "Daniel",
  "Grace",
  "Isaac",
  "Kato",
  "Mercy",
  "Noah",
  "Sarah",
  "Tasha",
  "Yusuf",
];

const renderHearts = () => {
  if (!heartWall) return;
  heartWall.innerHTML = "";
  hearts.forEach((name) => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.setAttribute("role", "img");
    heart.setAttribute("aria-label", `Heart pledge from ${name}`);
    heart.title = name;
    heartWall.appendChild(heart);
  });
};

const animateCount = (el) => {
  const target = Number(el.dataset.count || 0);
  const duration = 1200;
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = value.toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const updateStat = (stat, increment = 1) => {
  const elements = document.querySelectorAll(`[data-stat='${stat}']`);
  if (!elements.length) return;
  elements.forEach((element) => {
    const current = Number(element.dataset.count || 0) + increment;
    element.dataset.count = current.toString();
    element.textContent = current.toLocaleString();
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  if (!form || !status) return;
  const formData = new FormData(form);
  const name = formData.get("name").toString().trim();
  const pledgeChecked = formData.get("pledge");

  if (!name) {
    status.textContent = "Please add your name so we can celebrate your pledge.";
    return;
  }

  if (!pledgeChecked) {
    status.textContent = "Please confirm the pledge statement to continue.";
    return;
  }

  if (pledgeButton) {
    pledgeButton.disabled = true;
    pledgeButton.textContent = "Submitting...";
  }

  const firstName = name.split(" ")[0];
  hearts.unshift(firstName);
  if (hearts.length > 60) hearts.pop();

  renderHearts();
  updateStat("pledges", 1);
  status.textContent = `Thank you, ${firstName}! Your pledge is now part of the Wall of Hearts.`;
  form.reset();

  if (pledgeButton) {
    pledgeButton.disabled = false;
    pledgeButton.textContent = "Submit Pledge";
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

highlightNumbers.forEach((el) => animateCount(el));

renderHearts();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
