const express = require('express');
const mongoose = require ('mongoose');

const PORT = 3000;
const app = express();
const DB = "mongodb://localhost:27017/";

const authRouter = require("./routes/auth");

app.use(express.json());
app.use(authRouter);

// connnections
mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch(e => console.log(e));

app.listen(PORT, '0.0.0.0', ()=>{
    console.log('connected at port ' + PORT);
});