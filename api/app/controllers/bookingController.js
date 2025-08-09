const Booking = require("../models/tourPackageSchema");

const CreateBooking = async (req, res, _next) => {
try {
    const providedData = req.body;
  const isExist = await Booking.findOne({ tourPackage: providedData.tourPackage, email: providedData.email })
  if (isExist) {
   throw new Error("This Booking is Alraday Exist")
  }
  const booking = await Booking.create(req.body);
  res.status(201).json({
    message: "Tour Booking Added Success",
    data: booking
  })
} catch (error) {
  console.log(error);
}
}
const getMyBooking = async (req, res, _next) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const bookings = await Booking.find({ email: email }).populate("tourPackage");

    res.status(200).json({
      message: "Tour bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};


const deleteBooking = async (req, res) => {
  try {
   
   const result= await Booking.findByIdAndDelete(req.params.id);
   console.log(result);
    res.status(200).json({
      message: "Deleted Success"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};




module.exports = {
  CreateBooking,
  getMyBooking,
  deleteBooking
}