const product = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const productController = require('../../app/controllers/productController');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'public/');
  },
  filename: (req, file, cb) => {
    // Extrai extensão do arquivo
    const fileExtension = file.originalname.split('.')[1];

    // Gera um id aleatório com a lib uuid para dar nome ao arquivo
    const fileId = uuidv4();

    // Concatena o fileId com o fileExtension para gerar o novo nome do arquivo
    const newNameFile = `${fileId}.${fileExtension}`;

    req.body.urlImage = `/backend/public/${newNameFile}`;
    cb(null, newNameFile);
  },
});

const upload = multer({ storage });

product.delete('/:id', productController.deleteById);
product.get('/:id', productController.getById);
product.put('/:id', productController.update);
product.post('/', upload.single('beerImg'), productController.create);
product.get('/', productController.getAll);

module.exports = product;

// Referencias utilizadas para implementar o upload das imagens

/*
  - https://consolelog.com.br/upload-de-arquivos-imagens-utilizando-multer-express-nodejs/#:~:text=Utilizando%20o%20multer%20para%20upload,%3D%20express()%3B%20app.
  - https://github.com/expressjs/multer/blob/master/doc/README-pt-br.md
*/