/**
 * Created by dannyyassine on 2017-10-21.
 */

const app = require('./app.js');

require('./config/routes')(app);
require('./config/env')(app);

app.get

const server = app.listen(app.get('port'), '0.0.0.0', function () {
    console.log("*\n*");
    console.log("/****************************************/");
    console.log('server listening on port ' + server.address().port);
    console.log("/****************************************/");
    console.log("*\n*");
});