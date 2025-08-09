const { CreateBooking, getMyBooking, deleteBooking } = require("../controllers/bookingController");
const { jwtToken } = require("../controllers/jwt");
const { createTourPackage, getAlldata, addBooking, getTourPackageById,  deleteTourPackage, UpdateTourPackage, getMyTourPackage,} = require("../controllers/tourPackageController");
const router = require("express").Router();
router.post('/tour-package', createTourPackage);
router.get("/tour-package", getAlldata);
router.get('/my-tour-package', getMyTourPackage);
router.delete('/tour-package/:id', deleteTourPackage);
router.delete('/tour-booking/:id', deleteBooking);
router.put("/tour-package/:id", UpdateTourPackage);
router.get("/tour-package/:id", getTourPackageById);
router.post("/tour-package/:id", addBooking);
router.post("/tour-booking",CreateBooking);
router.get("/tour-booking", getMyBooking);
router.post("/jwt", jwtToken);

module.exports = router;
