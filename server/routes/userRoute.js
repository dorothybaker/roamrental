import express from "express";
import {
  getAllBookings,
  bookVisit,
  createUser,
  cancelBooking,
  favorites,
  getAllFavorites,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id", jwtCheck, bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/cancelBooking/:id", jwtCheck, cancelBooking);
router.post("/favorites/:id", jwtCheck, favorites);
router.post("/allFavorites", getAllFavorites);

export { router as userRoute };
