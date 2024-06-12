const express = require('express');
const { 
    searchRecipe, 
    findRecipe, 
    getMealCategories,
    getMealAreas,
    getIngredients,
    getRandomMeals,
    getDietaryRecipes
} = require('../controllers/recipeController');

const router = express.Router();

// Route to search recipes by name
router.get('/searchRecipe', searchRecipe);

// Route to find recipes by ingredient
router.get('/findRecipe', findRecipe);

// Route to list meal categories
router.get('/categories', getMealCategories);

// Route to list meal areas
router.get('/areas', getMealAreas);

// Route to list ingredients
router.get('/ingredients', getIngredients);

// Route to get a random meal
router.get('/randomMeal', getRandomMeals);

// Route to get recipes based on dietary restrictions
router.get('/dietaryRecipes', getDietaryRecipes);

module.exports = router;