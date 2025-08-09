const { Schema, model } = require("mongoose");

const tourPackageSchema = new Schema({
    tourPackage: {
        type: Schema.Types.ObjectId,
        ref: "TourPackage",
        required: true
    },

    email: {
        type: String,
        required: true,
        
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Pending"],
        default: "Pending"
    }
}, {
    timestamps: true
});

const Booking = model("Booking", tourPackageSchema);

module.exports = Booking