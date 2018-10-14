const express = require('express')
const router = express.Router()
const User = require ('../models/User')
const passport = require ('passport')
const Partido = require('../models/Partido')
const Gol = require('../models/Gol')
const {generateToken, verifyToken} = require ('../helpers/jwt')

// router.get('/',(req,res,next)=>{
//   Gol.find({gol})
//   .then(user=>{
//     res.status(201).json(user)
//   })
//   .catch(e=>next(e))
// })

router.get('/partidos', (req, res)=>{
  Partido.find({})
  .then(partidos=>res.status(201).json(partidos))
  .catch(e=>next(e))
})

router.get('/goles', (req, res)=>{
  Gol.find({})
  .then(gols=>res.status(201).json(gols))
  .catch(e=>next(e))
})

router.get('/profile',verifyToken,(req,res,next)=>{
  User.findOne(req.user._id).populate('gol partido')
  .then(user=>{
    res.status(201).json(user)
  })
  .catch(e=>next(e))
})


router.post('/gol',verifyToken, (req,res,next)=>{
  Gol.create({...req.body, user: req.user._id})
  .then(gol=>{
    User.findByIdAndUpdate(req.user._id, {$set: {gol: gol._id}}, {new: true})
    .then(user => console.log(user))
    res.status(201).json(gol)
  })
  .catch(e=>next(e))
})



router.post('/partido',verifyToken, (req,res,next)=>{
  Partido.create({...req.body, user: req.user._id})
  .then(partido=>{
    User.findByIdAndUpdate(req.user._id, {$set: {partido: partido._id}}, {new: true})
    .then(user => console.log(user))
    res.status(201).json(partido)
  })
  .catch(e=>next(e))
})

router.get('/private',verifyToken,(req,res,next)=>{
  res.send('Holi privado!')
})

router.post('/login',
passport.authenticate('local'),
(req,res,next)=>{
  const token= generateToken(req.user)
  res.status(200).json({token, user:req.user})
})

router.post ('/signup', (req,res,next)=>{
  User.register(req.body, req.body.password)
  .then(user=>{
    res.status(201).json(user)
  })
  .catch(e=>next(e))
})


module.exports = router