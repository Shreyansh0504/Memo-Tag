const Waitlist = require("../models/Waitlist");

exports.joinWaitlist = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res
        .status(400)
        .json({ error: "Please provide a valid email address" });
    }

    const existing = await Waitlist.findOne({ email });
    if (existing) {
      return res
        .status(200)
        .json({ message: "You are already on our waitlist!" });
    }

    const newEntry = new Waitlist({ email });
    await newEntry.save();

    res.status(201).json({ message: "Thank you for joining our waitlist!" });
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    res.status(500).json({ error: "Server error. Please try again." });
  }
};

exports.getWaitlist = async (req, res) => {
  try {
    const entries = await Waitlist.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    res.status(500).json({ error: "Server error" });
  }
};
