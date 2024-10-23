const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
app.set("view engine" ,"ejs");
const bcrypt = require("bcrypt");
const db = require("./config/mongoose-connections");

const ownerRouter = require("./routes/ownerRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const indexRouter = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', indexRouter);
app.use('/owners', ownerRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(3000);