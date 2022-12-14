const express = require('express');
const mongoose = require ('mongoose');

require("dotenv").config();

const PORT = 3000 || 8181;
const app = express();

const authRouter = require("./routes/auth");
const todoRouter = require("./routes/todoRoute");
const imageRouter = require("./routes/images");

app.use(express.json());
app.use(authRouter);
app.use(todoRouter);
app.use(imageRouter);

// connnections
mongoose.connect(process.env.DB).then(() => {
    console.log('Connection Successful');
}).catch(e => console.log(e));

app.listen(PORT, "0.0.0.0", ()=>{
    console.log('connected at port ' + PORT);
});