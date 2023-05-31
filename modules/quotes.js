export async function getQuotes() {  
    const text = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    const quote = data[Math.floor(Math.random()*data.length)];
    text.textContent = quote['text'];
    author.textContent = quote['author'];
    };