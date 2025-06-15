const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  city: {
    type: String,
    required: [true, 'Please add a city']
  },
  state: {
    type: String,
    required: [true, 'Please add a state']
  },
  zipCode: {
    type: String,
    required: [true, 'Please add a zip code']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  propertyType: {
    type: String,
    enum: ['residential', 'commercial', 'land', 'rental'],
    required: [true, 'Please select property type']
  },
  status: {
    type: String,
    enum: ['available', 'under_offer', 'sold', 'rented'],
    default: 'available'
  },
  bedrooms: {
    type: Number
  },
  bathrooms: {
    type: Number
  },
  squareFeet: {
    type: Number
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  images: {
    type: [String],
    required: [true, 'Please add at least one image']
  },
  features: {
    type: [String]
  },
  yearBuilt: {
    type: Number
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },
  agent: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Property', PropertySchema);