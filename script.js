const quotes = [
  {
    quote: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs',
  },
  {
    quote: 'Innovation distinguishes between a leader and a follower',
    author: 'Steve Jobs',
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: 'Steve Jobs',
  },
  {
    quote: 'Strive not to be a success, but rather to be of value',
    author: 'Albert Einstein',
  },
  {
    quote: 'The only thing we have to fear is fear itself',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote: 'Life is what happens when you’re busy making other plans',
    author: 'John Lennon',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts',
    author: 'Winston Churchill',
  },
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall',
    author: 'Nelson Mandela',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: 'You miss 100% of the shots you don’t take',
    author: 'Wayne Gretzky',
  },
];

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);
