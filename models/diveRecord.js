const mongoose = require('mongoose');
const Joi = require('joi');

const diveRecordSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    diveNumber: { type: Number, required: true },
   


});
const diveRecord = mongoose.model('diveRecord', diveRecordSchema);

function validateDiveRecord(diveRecord) {
    const schema = Joi.object({
        userId: Joi.string().required(),
        diveNumber: Joi.number().required(),
  


    });
    return schema.validate(diveRecord);
}

exports.diveRecord = diveRecord;
exports.validateDiveRecord = validateDiveRecord;
exports.diveRecordSchema = diveRecordSchema;