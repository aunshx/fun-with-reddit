const express = require('express');
const expressSanitizer = require('express-sanitizer');

require('dotenv').config()

const PORT = process.env.PORT

const app = express()

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount express-sanitizer middleware here
app.use(expressSanitizer());

app.use("/api/reddit", require("./routes/api/reddit"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})