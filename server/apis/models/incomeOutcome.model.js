const mongoose = require('mongoose');

const IncomeOutcomeSchema = new mongoose.Schema({
    "Group CC": {
        type: String
    },
    "CC": {
        type: String
    },
    "1st Classification ": {
        type: String
    },
    "2nd Classification": {
        type: String
    },
    createdAt: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model("IncomeOutcome", IncomeOutcomeSchema);
