const db = require("../../database/models");


module.exports = {
    create: (req,res)=>{
       
         db.Movie.create(req.body)
            .then(movie => {
              return res.status(200).json({
                data:movie,
                status:200,
             create: "la película fue creada con éxito"
          })
      })
    },


    destroy: (req,res)=>{
db.Movie.destroy({
    where: {
     id: req.params.id
    }
    })
.then(movie =>{
    return res.json({movie,
    delete:"la película fue eliminada"})
})
    }
}
 