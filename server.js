const express = require("express");
const dbConnection = require("./config/db");

// Instantiate Express
const app = express();

const PORT = process.env.PORT || 3001;

// Connect to database
dbConnection();

// Initialize middleware
app.use(express.json({ extended: false }));

// Use routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/notes", require("./routes/api/notes"));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
