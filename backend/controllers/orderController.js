import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {
  try {
    const { items, subtotal, deliveryFee, taxes, total } = req.body;

    if (!items || items.length === 0)
      return res.status(400).json({ message: "No items in order!" });

    const order = await Order.create({
      userId: req.user.id, 
      items,
      subtotal,
      deliveryFee,
      taxes,
      total,
    });

    return res.status(201).json({ message: "Order placed successfully!", order });
  } catch (err) {
    console.error("Order error:", err.message);
    return res.status(500).json({ message: err.message || "Server error!" });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
    return res.status(200).json(orders);
  } catch (err) {
    console.error("Get orders error:", err.message);
    return res.status(500).json({ message: err.message || "Server error!" });
  }
};