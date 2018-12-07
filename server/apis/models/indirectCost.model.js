const mongoose = require('mongoose');

const IndirectCostSchema = new mongoose.Schema({
 	"Group CC": {
 		type: String
 	},
    "CC": {
    	type: String
    },
    "CC2": {
    	type: String
    },
    "Account Group": {
    	type: String
    },
    "Year": {
    	type: String
    },
    "Month": {
    	type: String
    },
    "Real / Budget": {
    	type: String
    },
    "Value": {
    	type: String
    },
});

module.exports = mongoose.model("IndirectCost", IndirectCostSchema);
