const mongoose = require('mongoose');

const AccountGroupSchema = new mongoose.Schema({
    "Account Group": {
        type: String
    },
    "3rd Classification": {
        type: String
    },
    "4th Classification": {
        type: String
    },
    "5th Classification": {
        type: String
    },
    createdAt: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model("AccountGroup", AccountGroupSchema);
