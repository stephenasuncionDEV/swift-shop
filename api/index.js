require('dotenv').config({path: "../.env"});
const express = require('express');
const cors = require('cors');
const router = require('../routes/index.js');
const app = express();
const production = false;
const { errorHandler } = require('../middlewares/errorHandler');

app.options(cors());
if (!production) {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    })
}
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

if (!production) {
    console.log("[Swift Shop] Connected")
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`[Swift Shop] listening at http://localhost:${PORT}`)
    })
}

module.exports = app;