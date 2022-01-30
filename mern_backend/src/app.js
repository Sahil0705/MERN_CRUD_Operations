const express = require("express");
const MensRanking = require("../src/models/model.js");
const router = require("../src/routers/route.js");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");

require("../src/db/conn.js");

app.use(bodyParser.json({extended:true}));

app.use(bodyParser.urlencoded({extended:true}));

const port = process.env.PORT || 4000;

app.use(express.json());

app.use(router);
app.use(cors());


app.listen(port,()=>
{
    console.log(`Connection is live at port no ${port}`);
});