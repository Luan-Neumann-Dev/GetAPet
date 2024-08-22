const router = require('express').Router()

const UserController = require('../controllers/UserController')

//MIDDLEWARES:
const verifyToken = require('../helpers/verify-token')
const {imageUpload} = require('../helpers/image-upload')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/checkUser', UserController.checkUser)
router.get('/:id', UserController.getUserById)

router.patch('/edit/:id', imageUpload.single('image'),verifyToken,UserController.editUser)


module.exports = router