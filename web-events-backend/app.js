const express = require("express");
const app = express();
const cors = require('cors');
const axios = require('axios');


if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "config/config.env" });
}

// Configure CORS
const corsOptions = {
    origin: 'https://event-drab-ten.vercel.app/', 
    credentials: true,              
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve images from the uploads folder
app.use("/uploads", express.static("middleware/uploads"));

const Session = require("./routes/session");
const User = require("./routes/user");
const Event = require("./routes/event");
const Contact = require("./routes/contact");
const Ticket = require("./routes/ticket");


app.use("/api/v1", Session);
app.use("/api/v1", User);
app.use("/api/v1", Event);
app.use("/api/v1", Contact);
app.use("/api/v1", Ticket);

module.exports = app;
