// Modules...
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Allow all cors
app.options('*', cors());

const port = 3000

// Add routes
app.get("/test", (req, res) => {
    res.json("It work!");
})

const mainRoute = require('./routes/main/index.js');
app.use('/main', mainRoute);

const createRoute = require('./routes/create/index.js');
app.use('/create', createRoute);

const manufactorRoute = require('./routes/manufactor/index.js');
app.use('/manufactor', manufactorRoute);

const settingRoute = require('./routes/settings/index.js');
app.use('/settings', settingRoute);

const buildingRoute = require('./routes/buildings/index.js');
app.use('/buildings', buildingRoute);

const typesRoute = require('./routes/types/index.js');
app.use('/types', typesRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})