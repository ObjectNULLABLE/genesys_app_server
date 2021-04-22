const router = require("express").Router();
const morgan = require('morgan');
const skillsRouter = require('./skills');
const sourcesRouter = require('./sources')

router.use(morgan('common'))

router.get('/', async (req, res) => {
  res.send(`Api working`)
})

router.use("/skills", skillsRouter) 
router.use("/sources", sourcesRouter)


module.exports = router