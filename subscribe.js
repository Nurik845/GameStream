const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
const resultMessage = document.getElementById("result-message");
const buyButtons = document.querySelectorAll(".buy-btn");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const plan = button.getAttribute("data-plan");
    resultMessage.textContent = `You have successfully purchased the "${plan}"!`;
  });
});
