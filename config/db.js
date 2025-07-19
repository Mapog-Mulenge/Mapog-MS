mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s
})
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.error("MongoDB Connection Error ❌", err));
  }
};

module.exports = connectDB;
