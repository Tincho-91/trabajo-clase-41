const db = require("../../database/models");

module.exports = {
    list: (req,res) => {
        db.Genre.findAll()
        .then(genres => {
            return res.status(200).json({
                status: 200,
                total: genres.length,
                url:"api/genres",
                genres
        })
        })
},
    detail: (req, res) => {
       db.Genre.findByPk(req.params.id)
        .then(genre => {
            return res.status(200).json({
                status: 200,
                genre});
        });
},
    }
