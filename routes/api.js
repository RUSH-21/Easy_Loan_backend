const express = require('express')
const loanController = require('../controllers/loanController')
const authController = require('../controllers/authController')

const router = express.Router();


router.get('/', (req,res)=>{
    res.send("Server up!");
})

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.get('/loan',loanController.getLoan)



router.use(authController.isLoggedIn);


router.post('/logout', authController.logout)
router.post('/logoutAll', authController.logoutAll)
router.patch('/update',authController.userUpdate)
router.post('/loan',loanController.createLoan)

module.exports = router;