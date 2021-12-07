const { Router } = require('express');
const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/homeController');
const budgetController = require('../controllers/budgetController');


routes.get('/', homeController.viewHome);
routes.post('/sendMessage', budgetController.createBudget);


module.exports = routes;
