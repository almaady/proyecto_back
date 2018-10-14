const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const golSchema = new Schema({

  user:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  partidoDate:{
    type:Date
  },
  equipo1:String,
  equipo2:String,
  jugador:String,
  descripcion:String,
  minuto:String,
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})


module.exports = mongoose.model('Gol', golSchema)