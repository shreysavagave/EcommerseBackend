const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const ownerRouter = require("./routes/ownerRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

const db = require("./config/mongoose-connections");

app.use('/owners', ownerRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(3000);