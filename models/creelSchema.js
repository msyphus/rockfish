const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creelSchema = new Schema({
    species: { type: String },
    length: { type: Number },
    dateCaught: { type: Date, default: Date.now },
    locationCaught: { type: String }
});

const CreelMod = mongoose.model("Creel", creelSchema);

module.exports = CreelMod;