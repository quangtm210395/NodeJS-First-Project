const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')


router.get("/", HomeController.getIndex)
router.get('/getUsers', HomeController.getUsers)

module.exports = router