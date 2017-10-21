/**
 * Created by dannyyassine on 2017-10-21.
 */

const app = require('./app.js');

require('./config/routes')(app);
require('./config/env')(app);

const port = process.env.PORT || 8080;
const server = app.listen(port, function () {
    console.log("*\n*");
    console.log("/****************************************/");
    console.log('server listening on port ' + server.address().port);
    console.log("/****************************************/");
    console.log("*\n*");
});