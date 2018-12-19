const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
  	"Negocio": {
  		type: String
  	},
    "País": {
    	type: String
    },
    "Canal": {
    	type: String
    },
    "Tipo": {
    	type: String
    },
    "Certificacion": {
    	type: String
    },
    "Calidad": {
    	type: String
    },
    "Cepa1": {
    	type: String
    },
    "Cepa": {
    	type: String
    },
    "Marca1": {
    	type: String
    },
    "Marca": {
    	type: String
    },
    "Packaging": {
    	type: String
    },
    "Real / Budget": {
    	type: String
    },
    "Month": {
    	type: String
    },
    "Year": {
    	type: String
    },
    "Value": {
    	type: String
    },
	createdAt: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model("Incomes", IncomeSchema);
