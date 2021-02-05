/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array - collection of quotes of quote objects
***/
const quotes = [
  {
    quote: 'May the Force be with you.',
    source: 'Jedi',
    citation: 'Star Wars',
    year: 1977,
    tags: 'guidance'
  },
  {
    quote: 'You know nothing Jon Snow.',
    source: 'Ygritte',
    citation: 'Game of Thrones',
    year: 2012,
    tags: 'humor'
  },
  {
    quote: 'You asked for my hustle, I gave you my heart.',
    source: 'Kobe Bean Bryant',
    citation: 'Dear Basketball',
    year: 2017,
    tags: 'inspiration'
  },
  {
    quote: 'I love you 3000.',
    source: 'Tony Stark',
    citation: 'Avengers: Endgame',
    year: 2019,
    tags: 'family'
  },
  {
    quote: 'If you want something, go get it. Period.',
    source: 'Will Smith',
    citation: 'The Pursuit of Happyness',
    year: 2006,
    tags: 'motivation'
  }
];



/***
 * `getRandomQuote` function - generates a random quote from array of quotes above
***/
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);

  return quotes[randomNum];
}


/***
 * `printQuote` function - uses the new random quote and displays it's contents to the browser
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  const citation = randomQuote.citation ? randomQuote.citation : '';
  const year = randomQuote.year ? randomQuote.year : '';
  const tags = randomQuote.tags ? randomQuote.tags : '';

  let output = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
      <span class="citation">${citation}</span>
      <span class="year">${year}</span>
      <span class="tags">${tags}</span>
    </p>
  `;

  document.getElementById('quote-box').innerHTML = output;

  // add random background color to page
  const randomBackground = getRandomBackground();
  document.querySelector('body').style.backgroundColor = randomBackground;
}

/***
 * `getRandomBackground` function - generates a new background color for the page for every random quote displayed
***/
function getRandomBackground() {
  const colors = ['#932432', '#39603D', '#203647', '#A28089', '#845BB3'];
  const randomNum = Math.floor(Math.random() * colors.length);
  
  return colors[randomNum];
}

/***
 * `setInterval` - a new page with a different quote automatically renders every 10 seconds
***/
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);