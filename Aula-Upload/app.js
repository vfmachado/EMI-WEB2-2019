const express = require('express');
const bodyParser= require('body-parser');
const multer = require('multer');
const path = require('path')

const app = express()

//DECLARAÇÃO DA FUNÇÃO QUE SERÁ UTILIZADA PARA ARMAZENAR ARQUIVOS
const storageFunction = multer.diskStorage({
    destination: function (req, file, cb) {
     //cria a pasta do usuário caso nao exista usando o fs.
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });
   
//CRIANDO UMA INSTÂNCIA DO MULTER COM A CONFIGURAÇÃO
//ESSA INSTÂNCIA EU CHAMEI DE UPLOAD
const upload = multer({ storage: storageFunction })


app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/inicial.html");   
});
 
//A FUNÇÃO UPLOAD.SINGLE É UM MIDDLEWARE.
//SIGNIFICA QUE ELA EXECUTA E DEPOIS EXECUTAMOS O NEXT() 
//OU SEJA, A PROXIMA FUNÇÃO
app.post('/enviaUm', upload.single('meuArquivo'), (req, res) => {
    const file = req.file
  if (!file) {
    res.write("Erro no upload - Nao existe arquivo");
    res.end();
  } else {
    res.send(file)
  }
});

app.post('/enviaVarios', upload.array('variosArquivos', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
        res.write("Erro no upload");
        res.end();
      } else {
        res.send(files)
      }
  });


let contador = 0;
  app.get('/download/:nome', (req, res) => {
    //O EXPRESS NOS DÁ O MÉTODO DOWNLOAD QUE PERMITE BAIXAR ARQUIVOS.
    //A INFORMAÇÃO QUE PRECISAMOS PASSAR É O CAMINHO DO ARQUIVO!
    contador++;
    res.download(__dirname + "/uploads/" + req.params.nome);
  });


  app.get('/qtsDownloads', (req, res) => {
    res.write("A imagem já foi baixada " + contador + " Vezes");
    res.end();
  })

app.listen(3000, () => console.log('Server started on port 3000'));