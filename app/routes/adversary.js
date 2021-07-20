const router = require("express").Router()
const { verifyToken, isModerator } = require("../middlewares/authJwt");
const Adversary = require("../models/adversary")

router.get("/:lang", async (req, res) => {
  const adversaries = await Adversary.find({lang: req.params.lang})
  res.send(adversaries)
	res.end("OK")
})

router.post("/:lang", [verifyToken, isModerator], async (req, res) => {
	const adversary = new Adversary(req.body)
	adversary.lang = req.params.lang //TODO: fix lang
	await adversary.save()
	res.send(adversary)
	res.end("OK")
})

router.patch("/:id", [verifyToken, isModerator], async (req, res) => {
	const adversaryToChange = await Weapon.findByIdAndUpdate(req.params.id, req.body, {new: true})
	console.log(adversaryToChange)
	res.send(adversaryToChange)
	res.end("OK")
})


router.delete("/:id", [verifyToken, isModerator], async (req, res) => {
	const adversaryToDelete = await Weapon.findByIdAndDelete(req.params.id)
	console.log(adversaryToDelete)
	res.send(adversaryToDelete)
	res.end("OK")
})

module.exports = router