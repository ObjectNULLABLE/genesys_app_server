const skillRouter = require("express").Router()
const Skill = require("../models/skill")

skillRouter.get("/", async (req, res) => {
  const skills = await Skill.find()
  res.send(skills)
  console.log(skills)
})

skillRouter.post("/", async (req, res) => {
	console.log(req.body)
	
	const skill = new Skill(req.body)
	console.log(skill)
	await skill.save()
	
	res.send(`Add ${req.body.name}`)
	// res.send(skill)
})

module.exports = skillRouter