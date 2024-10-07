import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  listingName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  locationTitle: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['house', 'apartment', 'condo', 'townhouse', 'villa', 'bungalow'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  guestCount: {
    type: Number,
    required: true,
    default: 1,
  },
  bedroomCount: {
    type: Number,
    required: true,
    default: 1,
  },
  bedCount: {
    type: Number,
    required: true,
    default: 1,
  },
  bathroomCount: {
    type: Number,
    required: true,
    default: 1,
  },
  amenities: {
    type: [String],
    default: [],
  },
  photos: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
});

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;