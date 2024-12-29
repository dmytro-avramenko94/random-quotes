import quotes from "../data/quotes.js";
import { generateRandomInt } from "../utils.js";
import { handleFavorite } from "./favorites.js";

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const quoteElement = document.getElementById("quote");
  const quoteAuthorElement = document.getElementById("quote-author");
  const { text, author, isFavorite } = quote;
  quoteElement.innerHTML = text;
  quoteAuthorElement.innerHTML = author;
  handleFavorite(isFavorite);
}

function chooseRandomQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote };
