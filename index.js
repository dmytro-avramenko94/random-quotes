import {
  toggleFavoriteCard,
  hideFavoriteBtn,
  showFavoriteCard,
  showFavoriteBtn,
  removeFavoriteCard,
} from "./src/handlers/favorites.js";
import { displayCurrentQuote } from "./src/handlers/currentQuote.js";
import {
  localStorageGetItem,
  localStorageSetItem,
} from "./src/utils/localStorage.js";
import { getRandomQuote } from "./src/handlers/randomQuote.js";
import { removeObjectFromArrayById } from "./src/utils/array.js";

const CURRENT_QUOTE_KEY = "currentQuote";
const FAVORITE_QUOTES_KEY = "favoriteQuotes";

const randomQuoteBtn = document.getElementById("random-quote-btn");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuote = null;
const favoriteQuotes = [];

function removeFavoriteQuote(id) {
  // REMOVE FAVORITE QUOTE
  if (id === currentQuote.id) {
    // Removing from favorites current quote by clicking on the card Remove from favorites button
    toggleCurrentQuote();
  } else {
    // Removing from favorites quote which is not current
    // Sync app state by removing favorite quote from the favoriteQuotes array
    removeObjectFromArrayById(favoriteQuotes, id);
    // Remove favorite card from UI
    removeFavoriteCard(id);
    // Save favorite quotes in the local storage
    localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
  }
  // // The way to find current quote in the HTML in the other module
  // const currentQuote = document.querySelector("[data-current-quote-id]");
  // const currentQuoteId = currentQuote.dataset.currentQuoteId;
}

function toggleCurrentQuote() {
  // CURRENT QUOTE UPDATE WHEN LOADED FROM LOCAL STORAGE OR RECEIVED RANDOMLY
  // sync app state and toggle isFavorite of the current quote
  currentQuote.isFavorite = !currentQuote.isFavorite;
  // update UI by toggling Icon (no need to display again current quote)
  showFavoriteBtn(currentQuote.isFavorite);
  // Save current quote in the local storage
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);

  // FAVOTITE QUOTES update
  // sync app state and update favoriteQuotes array
  if (currentQuote.isFavorite) {
    favoriteQuotes.push({ ...currentQuote });
  } else {
    removeObjectFromArrayById(favoriteQuotes, currentQuote.id);
  }
  // update UI by adding or removing favorite card
  toggleFavoriteCard(currentQuote, favoritesContainer);
  // Save favorite quotes in the local storage
  localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
}

function setCurrentQuote(quote) {
  // NEW RANDOM QUOTE
  // Change app state and write copy of the quote to the current quote
  currentQuote = { ...quote };
  // Check if id of the current quote is among favorite quotes and set isFavorite to true.
  currentQuote.isFavorite = !!favoriteQuotes.find(
    (favoriteQuote) => favoriteQuote.id === currentQuote.id
  );
  // show current quote in the UI
  displayCurrentQuote(currentQuote);
  // Display favorite icon and change it's state
  showFavoriteBtn(currentQuote.isFavorite);
  // Save current quote in the local storage
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
}

hideFavoriteBtn();
quoteFavoriteBtn.addEventListener("click", toggleCurrentQuote);

// expecting new random quote {id, text, author}
randomQuoteBtn.addEventListener("click", () =>
  setCurrentQuote(getRandomQuote())
);

function init() {
  const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTES_KEY);

  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      favoriteQuotes.push(quote);
      showFavoriteCard(quote, favoritesContainer);
    });
  }

  const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (currentQuoteFromStorage) {
    setCurrentQuote(currentQuoteFromStorage);
  }
}

window.addEventListener("load", init);

export { quoteFavoriteBtn, removeFavoriteQuote };
