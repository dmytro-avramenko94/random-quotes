import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quoteElement.innerHTML = quote;
  quoteAuthorElement.innerHTML = author;
  toggleFavoriteBtn.textContent = randomQuote.isFavorite
    ? "Remove from Favorites"
    : "Add to Favorites";

  toggleFavoriteBtn.style.display = "inline-block";
}

function toggleFavorite() {
  let currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? "Remove from Favorites"
    : "Add to Favorites";

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.innerHTML = `
      <p>${currentQuote.quote}</p>
      <p class='author'>${currentQuote.author}</p>`;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll(".favorite-card");
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }

  // currentQuote.isFavorite
  //   ? (toggleFavoriteBtn.textContent = "Remove from Favorites")
  //   : (toggleFavoriteBtn.textContent = "Add to Favorites");

  // !quotes[currentQuoteIndex].isFavorite
  //   ? (quotes[currentQuoteIndex].isFavorite = true)
  //   : (quotes[currentQuoteIndex].isFavorite = false);
}

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

generateRandomQuote();
