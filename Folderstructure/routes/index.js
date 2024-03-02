const router = require('express').Router();
const constroller = require('../controllers/index')

router.get('/home', constroller)
router.get('/about', (req, res) => {
    res.send('About page')
})

module.exports = router;