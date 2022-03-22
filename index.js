// const app = require("./config/express");
// const mongoose = require("./config/mongoose");

// mongoose.connect("mongodb://localhost:27017/HealthiWealthi") , () => {
//     con
// }

// app.listen(8080, () => {
//   console.log("BE started at port 9002");
// });

// module.exports = app;

const config = require('./config/vars');
const app = require('./config/express');
const routes = require('./routes/index');
const mongoose = require('./config/mongoose');

mongoose.connect("mongodb://localhost:27017/HealthiWealthi");

// mount api v1 routes
app.use('/api', routes);

const port = process.env.PORT || config.LISTEN_PORT;
app.listen(port, () => {
    console.log(`listening on port ${config.LISTEN_PORT}`);
});

module.exports = app;