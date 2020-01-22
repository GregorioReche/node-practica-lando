const express = require('express');
const app = express();

// View Engine
app.set('view engine','ejs');
app.set('views', './src/views');

//Routes
app.get('/', (req,res) => {
    res.render('Estoy en la página de inicio.')
})
// Armar las rutas para "acerca-de" y "contacto"

app.get('/acerca-de', (req,res) => {
    res.render('Estoy en la página de acerca de acerca de.')
})

app.get('/contacto', (req,res) => {
    res.render('Estoy en la página de contacto.')
})

app.get('*',(req, res) => {
    res.render('Esta pagina no existe amewo.')
})

app.listen(3000, () => console.log('servidor corriendo en el puerto 3000'));