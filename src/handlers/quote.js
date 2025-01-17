import quotes from "../data/quotes.js";
import { generateRandomInt } from "../utils/math.js";
import { handleFavorite } from "./favorites.js";

function handleQuote(quotes, favoriteQuotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes);
  // check if id of randomQUote is among ids of the favoreteQuotes
  if (favoriteQuotes.find((quote) => quote.id === randomQuote.id)) {
    randomQuote.isFavorite = true;
  }
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.innerHTML = `"${text}"`;
  quoteAuthorElement.innerHTML = author;
  handleFavorite(isFavorite);
}

function chooseRandomQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

function findQuoteById(quotes, id) {
  return quotes.find((quote) => quote.id === id);
}

export { handleQuote, displayQuote, findQuoteById };
