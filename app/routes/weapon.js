const router = require("express").Router()
const Weapon = require("../models/weapon")

router.get("/:lang", async (req, res) => {
  const weapons = await Weapon.find({lang: req.params.lang})
  res.send(weapons)
	res.end("OK")
})

router.post("/:lang", async (req, res) => {
	const weapon = new Weapon(req.body)
	weapon.lang = req.params.lang
	await weapon.save()
	res.send(weapon)
	res.end("OK")
})

router.patch("/:weaponID", async (req, res) => {
	let weaponToChange = await Weapon.findByIdAndUpdate(req.params.weaponID, req.body, {new: true})
	console.log(weaponToChange)
	res.send(weaponToChange)
	res.end("OK")
})


router.delete("/:weaponID", async (req, res) => {
	let weaponToDelete = await Weapon.findByIdAndDelete(req.params.weaponID)
	console.log(weaponToDelete)
	res.send(weaponToDelete)
	res.end("OK")
})

module.exports = router