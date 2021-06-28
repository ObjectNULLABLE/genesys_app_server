const router = require("express").Router()
const { isModerator, verifyToken } = require("../middlewares/authJwt");
const Quality = require("../models/quality")

router.get("/:lang", async (req, res) => {
  const qualities = await Quality.find({lang: req.params.lang})
  res.send(qualities)
	res.end("OK")
})

router.post("/:lang", [verifyToken, isModerator], async (req, res) => {
	const quality = new Quality(req.body)
	quality.lang = req.params.lang
	await quality.save()
	res.send(quality)
	res.end("OK")
})

router.patch("/:qualityID", [verifyToken, isModerator], async (req, res) => {
	let qualityToChange = await Quality.findByIdAndUpdate(req.params.qualityID, req.body, {new: true})
	console.log(qualityToChange)
	res.send(qualityToChange)
	res.end("OK")
})


router.delete("/:qualityID", [verifyToken, isModerator], async (req, res) => {
	let qualityToDelete = await Quality.findByIdAndDelete(req.params.qualityID)
	console.log(qualityToDelete)
	res.send(qualityToDelete)
	res.end("OK")
})

module.exports = router