const request = require('request');

/*
for (let numero = 1; numero <= 5; numero++) {
request('https://jsonplaceholder.typicode.com/posts/' + numero, (error, response, body) => {
    console.log("\n\nPOST: " + numero);
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});
}

*/


/*
let url = "https://www.googleapis.com/books/v1/volumes?q=isbn:9788543004792";

request(url, (error, response, body) => {
    
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.

    //transformando em um objeto JS
    let conteudoJSON = JSON.parse(body);

   // console.log(conteudoJSON);
    let livro = conteudoJSON.items[0].volumeInfo;

    let titulo = livro.title;

    console.log("Livro buscado foi: " + titulo);


});
*/



let url = "http://viacep.com.br/ws/96030494/json/";

request(url, (error, response, body) => {
    
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.


});
