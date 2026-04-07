const db = require("../config/db");

exports.searchTrips = (req, res) => {
  const { source, destination, date } = req.query;

  db.query(
    "SELECT * FROM trips WHERE source=? AND destination=? AND date=?",
    [source, destination, date],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
};