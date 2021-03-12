const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const orderSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tickets',
  },
});

// Create the model class
const ModelClass = mongoose.model('orders', orderSchema);

// Export the model
module.exports = ModelClass;
