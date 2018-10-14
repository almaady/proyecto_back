const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({

  username:{
    type:String,
    required:true
  },
  email: String,
  photoURL: String,
  partido:{
    type:Schema.Types.ObjectId,
    ref:'Partido'
  },
  gol:{
    type:Schema.Types.ObjectId,
    ref:'Gol'
  },
  equipo: String,
  
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'})

module.exports = mongoose.model('User', userSchema)