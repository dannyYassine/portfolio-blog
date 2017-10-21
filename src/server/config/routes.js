/**
 * Created by dannyyassine on 2017-10-21.
 */

module.exports = app => {

    /**
     * Front-end application
     */
    app.get('/', (request, response) => {
        response.render('index.html');
    });

    app.use((request, response, err) => {
        response.render('notFound.html');
    });

};