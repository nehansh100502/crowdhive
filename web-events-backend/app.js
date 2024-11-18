const express = require("express");
const app = express();
const cors = require('cors');
const axios = require('axios');
const path = require('path');


if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: ".env" });
}

// Configure CORS
const corsOptions = {
    origin: 'https://crowdhive.onrender.com', 
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
app.use(express.static(path.join(__dirname, "../events-web/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "events-web", "dist", "index.html"));
});

module.exports = app;
