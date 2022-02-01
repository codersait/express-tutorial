const express = require("express");
const router = express.Router();
const {
  createPerson,
  getPeople,
  getPerson,
  deletePerson,
  updatePerson,
} = require("../controllers/people");

// Get All People
// router.get("/", getPeople);

// Post Person
// router.post("/", createPerson);
// Get Single Person
// router.get("/:id", getPerson);

// Edit Person
// router.put("/:id", updatePerson);

// Delete Person
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPerson);
router.route("/:id").get(getPerson).put(updatePerson).delete(deletePerson);

module.exports = router;
