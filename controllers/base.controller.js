const createError = require('http-errors');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

module.exports.base = (req, res, next) => {
    res.render('index', {
        title: 'Welcome to your CRUD project'
    });
};

module.exports.listCelebrities = (req, res, next) => {
    Celebrity.find()
        .then(
            celebrities => {
                res.render('celebrities/list', { celebrities })
            }
        ).catch(
            error => next(error)
        );
};

module.exports.celebrityDetail = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        next(createError(404));
    } else {
        Celebrity.findById(id)
            .then(
                celebrity => {
                    res.render('celebrities/detail', { celebrity })
                }
            ).catch(
                error => next(error)
            );
    }
};
