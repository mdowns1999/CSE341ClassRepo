const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const displaySimpleName = (req, res, next) => {
    res.json("Jami Downs!!");
}

const getAllContacts = async (req, res, next) => {
    const result = await mongodb.getDb().db("contactInfo").collection("contacts").find();
    result.toArray().then((lists) => {
        res.status(200).json(lists);
    });


}

// const getSingleContactsByID = async (req, res, next) => {

//     const userId = new ObjectId(req.params.id);
//     const result = await mongodb
//     .getDb()
//     .db("contactInfo")
//     .collection("contacts")
//     .find({ _id: userId});;


//     result.toArray().then((lists) => {
//         res.setHeader('Content-Type', 'application/json');
//         res.status(200).json(lists[0]);
//       });

// }

  const getSingleContactByID = async (req, res, next) => {
      const userIdString = req.params.id;
      const result = await mongodb
        .getDb()
        .db("contactInfo")
        .collection('contacts')
        .find({_id: ObjectId(userIdString)});
  
        
      result.toArray().then((lists) => {
        res.status(200).json(lists);
      });
    };

module.exports = {getAllContacts, getSingleContactByID, displaySimpleName};
