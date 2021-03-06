const path = require('path');

const express = require('express');

const rootDir = require("../util/path");

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render("create-user");
});

router.post('/add', (req, res, next) => {
    console.log('/add', req.body);
    users.push({userName: req.body.userName});
    res.render('add');
});

router.get('/user', (req, res, next) => {
    res.render('user', {usrs: users});
});

exports.routes = router;
exports.usrs = users;