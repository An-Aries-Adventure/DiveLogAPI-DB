const mongoose = require('mongoose');
const Joi = require('joi');

const diveRecordSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    diveNumber: { type: Number, required: true },
    date: {type: Date, required: true},
    DiveSite: {type: String},
    city: {type:String, required: true},
    country: {type: String, required: true},
    startingPressure: {type: Number},
    endingPressure:{type: Number},
    visibility: {type: Number},
    timeIn: {type: Number},
    timeOut:{type: Number},
    totalDiveMin: {type: Number},
    minAtDepth: {type: Number},
    airConsumption: {type: Number},
    maxDepth: {type:Number},
    weight: {type: Number},
    cylinderSize: {type: String},
    airTemp: {type: Number},
    bottomTemp: {type: Number},
    wetSuit: {type: Boolean},
    drySuit:{type: Boolean},
    freshWaterDive:{type: Boolean},
    saltWaterDive:{type: Boolean},
    boatDive:{type: Boolean},
    shoreDive:{type: Boolean},
    driftDive:{type: Boolean},
    nightDive:{type: Boolean},
    comment:{type: String},
    verifier: {type: String},
    scubaCert: {type: Number},
    instructor: {type:Boolean},
    diveMaster: {type:Boolean},
    buddy: {type:Boolean},
    safetyDepth: {type: Number},
    safetyMinutes: {type: Number}

});
const DiveRecord = mongoose.model('diveRecord', diveRecordSchema);

function validateDiveRecord(diveRecord) {
    const schema = Joi.object({
        userId: Joi.string().required(),
        diveNumber: Joi.number().required(),
        date: Joi.date().required(),
        diveSite: Joi.string().allow(""),
        city: Joi.string().required(),
        country: Joi.string().required(),
        startingPressure: Joi.number().allow(0),
        endingPressure: Joi.number().allow(0),
        visibility: Joi.number().allow(0),
        timeIn: Joi.number().allow(0),
        timeOut:Joi.number().allow(0),
        totalDiveMin: Joi.number().allow(0),
        minAtDepth: Joi.number().allow(0),
        airConsumption: Joi.number().allow(0),
        maxDepth: Joi.number().allow(0),
        weight: Joi.number().allow(0),
        cylinderSize: Joi.string().allow(""),
        airTemp: Joi.number().allow(0), 
        bottomTemp: Joi.number().allow(0),
        wetSuit: Joi.boolean(),
        drySuit: Joi.boolean(),
        freshWaterDive:Joi.boolean(),
        saltWaterDive:Joi.boolean(),
        boatDive:Joi.boolean(),
        shoreDive:Joi.boolean(),
        driftDive:Joi.boolean(),
        nightDive:Joi.boolean(),
        comment:Joi.string().allow(""),
        verifier: Joi.string().allow(""),
        scubaCert: Joi.number().allow(0),
        instructor: Joi.boolean(),
        diveMaster: Joi.boolean(),
        buddy: Joi.boolean(),
        safetyDepth:Joi.number().allow(0),
        safetyMinutes: Joi.number().allow(0)
    });


    return schema.validate(diveRecord);
}

exports.DiveRecord = DiveRecord;
exports.validateDiveRecord = validateDiveRecord;
exports.diveRecordSchema = diveRecordSchema;