
const request = require('request');
/*
request('https://jsonplaceholder.typicode.com/posts/1', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  let objetoJSON = JSON.parse(body);
  console.log("O titulo que veio da API foi: " + objetoJSON.title);

});
*/

let url = "https://www.googleapis.com/books/v1/volumes?q=isbn:8576831309";

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
 
    let conteudoJSON = JSON.parse(body);

    let livro = conteudoJSON.items[0].volumeInfo;

    console.log(livro.title);
    console.log(livro.authors);
});