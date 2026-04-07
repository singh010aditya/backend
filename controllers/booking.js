const db = require("../config/db");

exports.createBooking = (req, res) => {
  const { user_id, trip_id, seats } = req.body;

  db.query("SELECT price FROM trips WHERE id=?", [trip_id], (err, result) => {
    const total = result[0].price * seats;

    db.query(
      "INSERT INTO bookings (user_id, trip_id, seats_booked, total_price, status) VALUES (?,?,?,?, 'booked')",
      [user_id, trip_id, seats, total],
      () => {
        res.json({ message: "Booking successful" });
      }
    );
  });
};

exports.getBookings = (req, res) => {
  db.query("SELECT * FROM bookings WHERE user_id=?", [req.user.id], (err, result) => {
    res.json(result);
  });
};
