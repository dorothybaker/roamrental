import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  let email = req.body;

  const userExists = await prisma.user.findUnique({ where: email });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.status(200).send({ message: "User created successfully", user: user });
  } else {
    res.status(201).send({ message: "User already exists!" });
  }
});

export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res.status(400).json({ message: "You already booked this residency!" });
    } else {
      await prisma.user.update({
        where: { email },
        data: { bookedVisits: { push: { id, date } } },
      });
      res.send("Visit booked successfully!");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getAllBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).send(bookings);
  } catch (error) {
    throw new Error(error.message);
  }
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    const index = user.bookedVisits.findIndex((visit) => visit.id === id);
    if (index === -1) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: { bookedVisits: user.bookedVisits },
      });
      res.send("Booking successfully cancelled!");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const favorites = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (user.favResidenciesID.includes(id)) {
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            set: user.favResidenciesID.filter((rId) => rId !== id),
          },
        },
      });
      res
        .status(200)
        .send({ message: "Successfully removed!", user: updatedUser });
    } else {
      const updatedUser = await prisma.user.update({
        where: { email },
        data: { favResidenciesID: { push: id } },
      });

      res.status(200).send({ message: "Favorites updated", user: updatedUser });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getAllFavorites = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const favorites = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesID: true },
    });
    res.status(200).send(favorites);
  } catch (error) {
    throw new Error(error.message);
  }
});
