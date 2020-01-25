const express = require('express');
const app = express();
const path = require('path');

// View Engine
app.set('view engine','ejs');
app.set('views', './src/views');

// Routes
const staticRoutes = require('./routes/statics');
app.use('/', staticRoutes);

// Recursos estáticos
app.use(express.static('public'));

// // Ruta de error de toda la aplicación.
// app.get('*',(req, res) => {
//     res.render('Esta pagina no existe amewo.')
// })

app.listen(3000, () => console.log('servidor corriendo en el puerto 3000'));