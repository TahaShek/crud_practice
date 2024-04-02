const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// routes
app.use("/api/products", productRoutes)



mongoose
  .connect(
    "mongodb+srv://tahashekh789:NU3lzpYfHfE9LYz2@backenddb.sr9wmtv.mongodb.net/?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => {
    console.log("connection established");

    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch(() => {
    console.log("error connecting");
  });
