const { DiveRecord, validateDiveRecord } = require('../models/diveRecord');


const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { error } = validateDiveRecord(req.body);
        if (error)
            return res.status(400).send(error);

        const newDiveRecord = new DiveRecord(req.body);

        await newDiveRecord.save();
        return res.send(newDiveRecord);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


router.get('/', async (req, res) => {
    try {
        let result = await DiveRecord.find();
        return res.send(result);
    }
    catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }
});


router.delete("/:id", function (req, res, next) {

    DiveRecord.findByIdAndRemove(req.params.id, req.body, function (err, diveRecord) {
        if (err) return next(err);
        res.json(diveRecord);
    });
});




// router.put('/', async (req, res) => {

//     const updateDiveRecord = await DiveRecord.findByIdAndUpdate(
//         req.body.id,
//         {
//             "favorite": req.body.favorite,
//         },
//         { new: true }
//     );
//     await updateDiveRecord.save();
//     return res.send(updateDiveRecord);
// });





















//     try {

//         let result = await newDiveRecord.aggregate([
//             { "$addFields": { "userId": { "$toObjectId": "$userId" } } },
//             { $lookup: { from: "users", localField: "userId", foreignField: "_id", as: "userInfo" } },
//             { $unwind: "$userInfo" },
//             {
//                 $project: {
//                     createdById: '$userInfo._id',
//                     firstName: '$userInfo.firstName',
//                     lastName: '$userInfo.lastName',
//                     comment: '$comment',
//                     likes: '$likes',
//                     dislikes: '$dislikes'
//                 }
//             }

//         ]);

//         return res.send(result);
//     } catch (ex) {
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }


module.exports = router