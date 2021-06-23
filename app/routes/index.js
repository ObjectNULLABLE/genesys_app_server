const router = require("express").Router();
const morgan = require('morgan');
const skillsRouter = require('./skills');
const sourcesRouter = require('./sources')
const qualitiesRouter = require('./quality');
const talentsRouter = require('./talent');
const weaponsRouter = require('./weapon');

router.use(morgan('common'))

router.get('/', async (req, res) => {
  res.send(`Api working`)
})

router.use("/skills", skillsRouter) 
router.use("/sources", sourcesRouter)
router.use("/qualities", qualitiesRouter)
router.use("/talents", talentsRouter)
router.use("/weapons", weaponsRouter)


module.exports = router