'use strict'

const express = require('express');

module.exports = () => {
    const router = express.Router();
    const controller = require('./controller')();


    router.get('/heroes', controller.getAllHeroes);

    return router;
};