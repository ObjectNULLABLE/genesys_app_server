const router = require("express").Router()
const Talent = require("../models/talent")

router.get("/:lang", async (req, res) => {
  const talents = await Talent.find({lang: req.params.lang})
  res.send(talents)
	res.end("OK")
})

router.post("/:lang", async (req, res) => {
	const talent = new Talent(req.body)
	talent.lang = req.params.lang
	await talent.save()
	res.send(talent)
	res.end("OK")
})

router.patch("/:talentID", async (req, res) => {
	let talentToChange = await Talent.findByIdAndUpdate(req.params.talentID, req.body, {new: true})
	console.log(talentToChange)
	res.send(talentToChange)
	res.end("OK")
})


router.delete("/:talentID", async (req, res) => {
	let talentToDelete = await Talent.findByIdAndDelete(req.params.talentID)
	console.log(talentToDelete)
	res.send(talentToDelete)
	res.end("OK")
})

module.exports = router