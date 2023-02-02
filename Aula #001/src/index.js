import express from 'express';

// POST, GET, PUT, DELETE; 
// GET: Pedindo uma informação do servidor
// POST: Enviando informações 
// PUT: Modificando informações 
// DELETE: Deletando 

const app = express();
const port = 8080;
app.use(express.json());

const products = [ "banana", "feijão", "vassoura" ]


app.get('/products', (req, res) => {
    res.json(products)
});

app.post('/products', (req, res) => {
    const { productName } = req.body;
    products.push(productName);
    res.json(products)
})

app.listen(port, () => console.log('hello world'));