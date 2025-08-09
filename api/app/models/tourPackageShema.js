const { Schema, model } = require("mongoose");

const TourPackageSchema = new Schema({
  tourName: {
    type: String,
    required: true,
  },
  email: { 
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  departureLocation: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  departureDate: {
    type: String,
    required: true,
  },
  packageDetails: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const TourPackage = model("TourPackage", TourPackageSchema);

module.exports = TourPackage;
