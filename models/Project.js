const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tag: { type: String, required: true },
  year: { type: String, required: true },
  desc: { type: String, required: true },
  link: { type: String, default: "#" },
  featured: { type: Boolean, default: false },
});

module.exports = mongoose.model("Project", projectSchema);
