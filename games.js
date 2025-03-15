const gamesList = document.getElementById("games-list");
const searchInput = document.getElementById("search");

let games = [];

const apiUrl = "https://gamemonetize.com/feed.php?format=0&num=100&page=1"; // Вставь сюда свою ссылку

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    games = data;
    displayGames(games);
  })
  .catch((error) => console.error("Ошибка загрузки игр:", error));

function displayGames(gameArray) {
  gamesList.innerHTML = "";
  gameArray.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
            <img src="${game.thumb}" alt="${game.title}">
            <h3>${game.title}</h3>
            <button onclick="launchGame('${game.url}')">Play Now</button>
        `;
    gamesList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(query)
  );
  displayGames(filteredGames);
});

function launchGame(url) {
  const container = document.getElementById("game-frame-container");
  const frame = document.getElementById("game-frame");
  frame.src = url;
  container.style.display = "flex";
}

document.getElementById("close-game").addEventListener("click", function () {
  const container = document.getElementById("game-frame-container");
  const frame = document.getElementById("game-frame");
  frame.src = "";
  container.style.display = "none";
});
const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
