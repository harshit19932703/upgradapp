        var createError = require('http-errors');
        var express = require('express');
        var _ = require('underscore');
        var path = require('path');
        var cookieParser = require('cookie-parser');
        var logger = require('morgan');
        var fs = require('fs');
        var cookieParser = require('cookie-parser');
        var bodyParser = require('body-parser');
        var indexRouter = require('./routes/index');
        var usersRouter = require('./routes/users');
        var app = express();
        var http = require('http').Server(app);
        process.env.PWD = process.cwd();
        // view engine setup
        app.use('/scripts', express.static(path.join(process.env.PWD, 'node_modules')));
        app.use('/jsonfiles', express.static(path.join(process.env.PWD, 'jsonfiles')));
        app.set('views', path.join(process.env.PWD, 'views'));
        app.use(express.static(path.join(process.env.PWD, '/public')));

        app.set('view engine', 'ejs');

        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cookieParser());


        app.use('/', indexRouter);
        app.use('/users', usersRouter);

        // catch 404 and forward to error handler
        app.use(function(req, res, next) {
          next(createError(404));
        });
        http.listen(process.env.PORT || 8000, function() {
            console.log('listening on *:8000');
        });



        // error handler
        app.use(function(err, req, res, next) {
          // set locals, only providing error in development
          res.locals.message = err.message;
          res.locals.error = req.app.get('env') === 'development' ? err : {};

          // render the error page
          res.status(err.status || 500);
          res.render('error');
        });

        module.exports = app;
