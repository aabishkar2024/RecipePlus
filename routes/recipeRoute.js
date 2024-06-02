const express = require('express');
const { searchRecipe, findRecipe } = require('../controllers/recipeController');

const router = express.Router();

// Route to search recipes by name
router.get('/searchRecipe', searchRecipe);

// Route to find recipes by ingredient
router.get('/findRecipe', findRecipe);

module.exports = router;