var quotes_text = '[{"quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.","quoteAuthor": "Thomas Edison"},{"quoteText": "You can observe a lot just by watching.","quoteAuthor": "Yogi Berra"},{"quoteText": "A house divided against itself cannot stand.","quoteAuthor": "Abraham Lincoln"}]'
var quotes_json =JSON.parse(quotes_text)
function loadData()
{
  fetch('https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json').then(function(response) {
  if(response.ok) {
    response.json().then(function(json) {
      quotes_json = json;
    });
  } else {
    console.log('Network request for quotes.json failed with response ' + response.status + ': ' + response.statusText);
  }
});
}
function updateQuote()
{
  var qoute = document.getElementById("quote");
  var randomQuote = Math.floor(Math.random() * quotes_json.length);
  alert[randomQuote];
  qoute.textContent = quotes_json[randomQuote].quoteText+" - "+quotes_json[randomQuote].quoteAuthor;
}
document.getElementById('quoteButton').onclick = updateQuote


