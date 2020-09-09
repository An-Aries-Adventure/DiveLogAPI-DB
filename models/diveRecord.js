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
        diveSite: Joi.string(),
        city: Joi.string().required(),
        country: Joi.string().required(),
        startingPressure: Joi.number(),
        endingPressure: Joi.number(),
        visibility: Joi.number(),
        timeIn: Joi.number(),
        timeOut:Joi.number(),
        totalDiveMin: Joi.number(),
        minAtDepth: Joi.number(),
        airConsumption: Joi.number(),
        maxDepth: Joi.number(),
        weight: Joi.number(),
        cylinderSize: Joi.string(),
        airTemp: Joi.number(),
        bottomTemp: Joi.number(),
        wetSuit: Joi.Boolean(),
        drySuit: Joi.Boolean(),
        freshWaterDive:Joi.Boolean(),
        saltWaterDive:Joi.Boolean(),
        boatDive:Joi.Boolean(),
        shoreDive:Joi.Boolean(),
        driftDive:Joi.Boolean(),
        nightDive:Joi.Boolean(),
        comment:Joi.string(),
        instructor: Joi.Boolean(),
        diveMaster: Joi.Boolean(),
        buddy: Joi.Boolean(),
        safetyDepth:Joi.number(),
        safetyMinutes: Joi.number()
    });


    return schema.validate(diveRecord);
}

exports.DiveRecord = DiveRecord;
exports.validateDiveRecord = validateDiveRecord;
exports.diveRecordSchema = diveRecordSchema;