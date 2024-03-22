const { Schema, model } = require("mongoose");
const serviceSchema = new Schema({
  skill: { type: String, required: true },
  project_name: { type: String, required: true },
  description: { type: String, required: true },
});
const Service = new model("Service", serviceSchema);
module.exports = Service;
