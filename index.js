//mvc = models (deals with database)
//mvc = views (what users sees)
//routes
//mvc = Controllers(connection point between model and views)

const express = require("express");
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "resouce not found",
  });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
