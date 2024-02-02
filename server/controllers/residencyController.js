import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body.data;

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner: { connect: { email: userEmail } },
      },
    });

    res
      .status(200)
      .send({ message: "Residency successfully created", residency });
  } catch (error) {
    if (error.code === "P2002") {
      throw new Error("A residency with this address already exists!");
    }
    throw new Error("Something went wrong!");
  }
});

export const getAllResidencies = asyncHandler(async (req, res) => {
  try {
    const residencies = await prisma.residency.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.status(200).send(residencies);
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({ where: { id } });
    if (residency) {
      res.status(200).send(residency);
    }
  } catch (error) {
    throw new Error(error.message);
  }
});
