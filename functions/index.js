const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    Message: "Success",
  });
});

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    response.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    response.status(403).json({
      message: "total must be greater than 0",
    });
  }
});
exports.api = onRequest(app);
