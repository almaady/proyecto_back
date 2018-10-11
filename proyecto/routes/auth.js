const express = require('express')
const router = express.Router()
const User = require ('../models/User')
const passport = require ('passport')
const {generateToken, verifyToken} = require ('../helpers/jwt')



router.get('/private',verifyToken,(req,res,next)=>{
  res.send('Holi privado!')
})

router.post('/login',
passport.authenticate('local'),
(req,res,next)=>{
  const token= generateToken(req.user)
})

router.post ('/signup', (req,res,next)=>{
  User.register(req.body, req.body.password)
  .then(user=>{
    res.status(201).json(user)
  })
  .catch(e=>next(e))
})


module.exports = router