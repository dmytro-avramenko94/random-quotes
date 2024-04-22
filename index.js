import quotes from './src/data/quotes.js';
import { toggleFavorite, hideFavoriteBtn } from './src/handlers/favorites.js';
import { handleQuote } from './src/handlers/quote.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
hideFavoriteBtn();
quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, quoteFavoriteBtn, favoritesContainer)
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

export { quoteFavoriteBtn };
