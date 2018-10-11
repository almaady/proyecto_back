const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const partidoSchema = new Schema({

  user:{
    type:Schema.Types.ObjectId,
    ref="User"
  },
  partidoDate:{
    type:Date
  }
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})


module.exports = mongoose.model('Partido', partidoSchema)