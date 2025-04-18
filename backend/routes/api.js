const express = require("express");
const router = express.Router();
const { joinWaitlist, getWaitlist } = require("../controllers/waitlist");

// @route   POST api/waitlist
// @desc    Add email to waitlist
router.post("/waitlist", joinWaitlist);

// @route   GET api/waitlist
// @desc    Get all waitlist entries
router.get("/waitlist", getWaitlist);

// @route   GET api/health
// @desc    Health check
router.get("/health", (req, res) => res.json({ status: "OK" }));

module.exports = router;
