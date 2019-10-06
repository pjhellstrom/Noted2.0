const express = require("express");
const dbConnection = require("./config/db");

// Instantiate express
const app = express();

const PORT = process.env.PORT || 5000;

// Connect to database
dbConnection();

// Initialize middleware
app.use(express.json({ extended: false }));

// Use routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/notes", require("./routes/api/notes"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
