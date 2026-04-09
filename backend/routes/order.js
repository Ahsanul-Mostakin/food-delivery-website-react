import express from "express";
import Order from "../models/Order.js";
import protect from "../middleware/auth.js";

const router = express.Router();

// Place order
router.post("/place", protect, async (req, res) => {
  try {
    const { items, subtotal, deliveryFee, taxes, total } = req.body;

    const order = await Order.create({
      userId: req.user.id,
      items,
      subtotal,
      deliveryFee,
      taxes,
      total,
    });

    res.json({ message: "Order placed!", order });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;