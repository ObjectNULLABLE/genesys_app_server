const router = require("express").Router()
const { verifyToken, isModerator } = require("../middlewares/authJwt");
const Source = require("../models/source")

router.get("/:lang", async (req, res) => {
  const sources = await Source.find({lang: req.params.lang})
  res.send(sources)
	res.end("OK")
})

router.post("/:lang", [verifyToken, isModerator], async (req, res) => {
	const source = new Source(req.body)
	source.lang = req.params.lang
	await source.save()
	res.send(source)
	res.end("OK")
})

router.patch("/:sourceID", [verifyToken, isModerator], async (req, res) => {
	let sourceToChange = await Source.findByIdAndUpdate(req.params.sourceID, req.body, {new: true})
	console.log(sourceToChange)
	res.send(sourceToChange)
	res.end("OK")
})


router.delete("/:sourceID", [verifyToken, isModerator], async (req, res) => {
	let sourceToDelete = await Source.findByIdAndDelete(req.params.sourceID)
	console.log(sourceToDelete)
	res.send(sourceToDelete)
	res.end("OK")
})

module.exports = router