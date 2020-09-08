const { diveRecord, validateDiveRecord } = require('../models/diveRecord');


const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { error } = validateDiveRecord(req.body);
        if (error)
            return res.status(400).send(error);

        const newDiveRecord = new diveRecord({
            userId: req.body.userId,
            diveNumber: req.body.diveNumber,
            date: req.body.date,
            city: req.body.city,
            country: req.body.country
        });

        await newDiveRecord.save();
        return res.send(newDiveRecord);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router