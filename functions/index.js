const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")

//API

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true })); // for security
app.use(express.json()); //to send data in json format

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("Payment request received for the amount >>> ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'INR'
    })

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

//example end point
//http://localhost:5001/clone-3ba8d/us-central1/api