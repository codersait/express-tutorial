let people = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const getPerson = (req, res) => {
  const { id } = req.params;
  const singlePerson = people.find((person) => person.id === Number(id));
  if (singlePerson) {
    return res.status(200).json({ success: true, data: singlePerson });
  }
  res.status(404).json({ success: false });
};

const updatePerson = (req, res) => {
  console.log("selammmmm");
  const { id } = req.params;
  const { name } = req.body;
  const singlePerson = people.find((person) => person.id === Number(id));
  if (singlePerson) {
    singlePerson.name = name;
    return res.status(200).json({ success: true, data: people });
  }
  res.status(404).json({ success: false });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const singlePerson = people.find((person) => person.id === Number(id));
  if (singlePerson) {
    const newPeople = people.filter((person) => person.id !== singlePerson.id);
    return res.status(200).json({ success: true, data: newPeople });
  }
  res.status(404).json({ success: false });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({
      success: true,
      data: [...people, { id: people.length + 1, name }],
    });
  }
  res.status(404).json({ success: false });
};

module.exports = {
  createPerson,
  getPeople,
  getPerson,
  deletePerson,
  updatePerson,
};
