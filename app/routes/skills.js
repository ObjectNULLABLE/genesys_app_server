const router = require("express").Router()
const Skill = require("../models/skill")

router.get("/:lang", async (req, res) => {
  const skills = await Skill.find({lang: req.params.lang})
  res.send(skills)
	res.end("OK")
})

router.post("/:lang", async (req, res) => {
	const skill = new Skill(req.body)
	skill.lang = req.params.lang
	await skill.save()
	res.send(skill)
	res.end("OK")
})

router.patch("/:skillID", async (req, res) => {
	let skillToChange = await Skill.findByIdAndUpdate(req.params.skillID, req.body, {new: true})
	console.log(skillToChange)
	res.send(skillToChange)
	res.end("OK")
})


router.delete("/:skillID", async (req, res) => {
	let skillToDelete = await Skill.findByIdAndDelete(req.params.skillID)
	console.log(skillToDelete)
	res.send(skillToDelete)
	res.end("OK")
})

module.exports = router