const express = require('express')
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
