const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const partidoSchema = new Schema({

  user:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  partidoDate:{
    type:Date
  },
  equipo1:String,
  equipo2:String,
  marcadorL:Number,
  marcadorV:Number,
  descripcion: String
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})


module.exports = mongoose.model('Partido', partidoSchema)