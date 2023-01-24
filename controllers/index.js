/* eslint-disable no-unused-vars */
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const displaySimpleName = async (req, res) => {
  res.json('Jami Downs!!');
};

const getAllContacts = async (req, res) => {
  const result = await mongodb.getDb().db('contactInfo').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleContactByID = async (req, res) => {
  const userIdString = req.params.id;
  const result = await mongodb
    .getDb()
    .db('contactInfo')
    .collection('contacts')
    .find({ _id: ObjectId(userIdString) });

  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const insertContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const result = await mongodb.getDb().db('contactInfo').collection('contacts').insertOne(contact);

  if (result.acknowledged) {
    res.status(202).json(result);
    console.log('The contact was successfully inserted!');
  } else {
    res.status(500).json('The insert has failed.');
  }
};

const updateContact = async (req, res) => {
  const userIdString = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const result = await mongodb
    .getDb()
    .db('contactInfo')
    .collection('contacts')
    .updateOne({ _id: userIdString }, { $set: contact });

  if (result.acknowledged) {
    res.status(204).send();
    console.log('The contact was successfully updated!');
  } else {
    res.status(404).json('The Update has failed.');
  }
};

const deleteContact = async (req, res) => {
  const userIdString = new ObjectId(req.params.id);

  const result = await mongodb
    .getDb()
    .db('contactInfo')
    .collection('contacts')
    .deleteOne({ _id: userIdString });

  console.log(`Results Deleted: ${result.deletedCount} `);

  if (result.deletedCount > 0) {
    res.status(204).send();
    console.log('The contact was successfully deleted!');
  } else {
    res.status(404).json('The Delete has failed.');
  }
};

module.exports = {
  getAllContacts,
  getSingleContactByID,
  displaySimpleName,
  insertContact,
  updateContact,
  deleteContact
};
