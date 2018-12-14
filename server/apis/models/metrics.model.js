const mongoose = require('mongoose');

const MetricsSchema = new mongoose.Schema({
    "Metric": {
        type: String
    },
    "Year": {
        type: String
    },
    "Real / Budget": {
        type: String
    },
    "Month": {
        type: String
    },
    "Value": {
        type: String
    },
    createdAt: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model("Metrics", MetricsSchema);
