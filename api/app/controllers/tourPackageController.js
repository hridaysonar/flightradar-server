
const TourPackage = require("../models/tourPackageShema");

// // CREATE a new tour package
const createTourPackage = async (req, res) => {
  try {
    const data = await TourPackage.create(req.body);
    res.status(201).json({ message: "Tour Package Created Successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create tour package" });
  }
};



// GET all packages
const getAlldata = async (req, res) => {
  try {
    const data = await TourPackage.find();
    res.status(200).json({ message: "Data fetched successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch packages" });
  }
};

// GET one by ID
const getTourPackageById = async (req, res) => {
  try {
    const data = await TourPackage.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Tour Package not found" });
    res.status(200).json({ message: "Package fetched", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching package" });
  }
};




// ADD a booking
const addBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const tour = await TourPackage.findById(id);
    if (!tour) {
      return res.status(404).json({ message: "Package not found" });
    }

    tour.bookings.push({
      user: { name, email },
      bookedAt: new Date(),
    });

    await tour.save();

    res.status(201).json({ message: "Booking added", bookings: tour.bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Booking failed" });
  }
};

// Get My TourPackage

const getMyTourPackage = async (req, res) => {
  const { email } = req.query;

  try {
    const myTourPackage = await TourPackage.find({ email });
    res.status(200).json({
      message: "My Tour Packages",
      data: myTourPackage,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch tour packages",
      error: err.message,
    });
  }
};



//  delete

// update 
const UpdateTourPackage = async (req, res) => {
    try {
        // Log the ID and body received
        console.log("Update request received for ID:", req.params.id);
        console.log("Request body:", req.body);

        const updatedTour = await TourPackage.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedTour) {
            console.log("Tour package not found for ID:", req.params.id);
            return res.status(404).json({ message: "Tour package not found" });
        }

        console.log("Tour package updated successfully:", updatedTour);
        res.status(200).json({
            message: "Update success",
            data: updatedTour
        });
    } catch (error) {
        // Log the actual error
        console.error("Error in UpdateTourPackage:", error);
        res.status(500).json({ message: "Update failed", error: error.message }); // Send error.message for better client side parsing
    }
};

// Your backend UpdateTourPackage function (from your prompt)





module.exports = {
  createTourPackage,
  addBooking,
  getAlldata,
  getMyTourPackage, 
  getTourPackageById,
  deleteTourPackage,
 UpdateTourPackage,
};
