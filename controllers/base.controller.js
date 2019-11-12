const createError = require('http-errors');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

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

module.exports.addCelebrity = (req, res, next) => {
    res.render('celebrities/form', {
        celebrity: new Celebrity()
    })
}

module.exports.doAddCelebrity = (req, res, next) => {
    console.info('body request => ', req.body)
    const celebrity = new Celebrity(req.body)

    celebrity.save()
        .then(() => res.redirect('/celebrities'))
        .catch(error => next(error));
}

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

module.exports.edit = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        next(createError(404));
    } else {
        Celebrity.findById(id)
            .then(
                celebrity => {
                    res.render('celebrities/form', { celebrity })
                }
            ).catch(
                error => next(error)
            );
    }
}

module.exports.doEdit = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        next(createError(404));
    } else {
        Celebrity.findByIdAndUpdate(id, req.body, { new: true })
            .then(celebrity => {
                console.log(celebrity)
                res.redirect('/celebrities')
            })
            .catch(
                error => next(error)
            )
    }
}

module.exports.delete = (req, res, next) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        next(createError(404));
    } else {
        Celebrity.findByIdAndDelete(id)
            .then(celebrityDeleted => {
                console.log('Celebrity deleted => ', celebrityDeleted)
                res.redirect('/celebrities')
            })
            .catch(error => next(error))
    }
}
