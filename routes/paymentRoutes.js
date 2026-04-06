const express = require("express");
const router = express.Router();

router.post("/checkout", (req, res) => {
  res.send("Payment route working");
});

module.exports = router;