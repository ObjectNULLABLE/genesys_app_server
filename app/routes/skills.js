const skillRouter = require("express").Router()
const Skill = require("../models/skill")

skillRouter.get("/", async (req, res) => {
  const skills = await Skill.find()
  res.send(skills)
  // console.log(skills)
})

skillRouter.post("/", async (req, res) => {
	const skill = new Skill({
		name: req.body.name,
    characteristic: req.body.characteristic,
	})
	await skill.save()
	res.send(skill)
})

module.exports = skillRouter