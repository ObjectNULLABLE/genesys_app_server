const router = require("express").Router();
const morgan = require('morgan');
const skillsRouter = require('./skills');

router.use(morgan('common'))

router.get('/', async (req, res) => {
  res.send('Api working')
})

router.use("/skills", skillsRouter) 


module.exports = router