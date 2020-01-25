const controller = {
    index:(req,res) => {
        res.render('index');
    },

    about: (req,res) => {
        res.render('about');
    },

    contact: (req,res) => {
        res.render('contacto');
    }
}

module.exports = controller;