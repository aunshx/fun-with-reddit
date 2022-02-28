const express = require('express');
const expressSanitizer = require('express-sanitizer');
const path = require('path')

require('dotenv').config()

const app = express()

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount express-sanitizer middleware here
app.use(expressSanitizer());

app.use("/api/reddit", require("./routes/api/reddit"));

// Serve static assets in production 
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})