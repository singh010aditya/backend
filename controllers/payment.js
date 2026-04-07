const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.pay = async (req, res) => {
  const { amount } = req.body;

  const payment = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "inr",
  });

  res.json(payment);
};