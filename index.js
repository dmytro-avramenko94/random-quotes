import { handleQuote } from "./src/handlers/quotes.js";

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", handleQuote);
