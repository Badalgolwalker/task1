const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' }]
});

module.exports = mongoose.model('Category', CategorySchema);
