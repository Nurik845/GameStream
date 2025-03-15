const newsList = document.getElementById("news-list");
const searchInput = document.getElementById("search");

let articles = [];

const apiKey = "1b904eb69343c76435a07a399b0ae7ae";
const apiUrl = `https://gnews.io/api/v4/search?q=games&lang=en&country=us&max=10&token=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log("Игровые новости:", data);
    articles = data.articles;
    displayNews(articles);
  })
  .catch((error) => console.error("Ошибка загрузки новостей:", error));

function displayNews(newsArray) {
  newsList.innerHTML = "";
  newsArray.forEach((article) => {
    const card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `
            <img src="${article.image || "img/logo.png"}" alt="${
      article.title
    }">
            <div class="news-card-content">
                <h3>${article.title}</h3>
                <p>${
                  article.description
                    ? article.description.slice(0, 100)
                    : "No description"
                }...</p>
                <a href="${article.url}" target="_blank">Read More</a>
            </div>
        `;
    newsList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredNews = articles.filter((article) =>
    article.title.toLowerCase().includes(query)
  );
  displayNews(filteredNews);
});

const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
