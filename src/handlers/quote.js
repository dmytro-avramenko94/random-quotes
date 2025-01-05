import quotes from "../data/quotes.js";
import { generateRandomInt } from "../utils.js";
import { handleFavorite } from "./favorites.js";

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.innerHTML = text;
  quoteAuthorElement.innerHTML = author;
  handleFavorite(isFavorite);
}

function chooseRandomQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote };
