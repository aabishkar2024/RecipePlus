const { searchRecipeByName, findRecipeByIngredient } = require('../services/recipeService');
const { handleSuccess, handleError } = require('../utils/responseHandler');
const ApiResponse = require('../utils/apiResponse');

const searchRecipe = async (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json(new ApiResponse(400, 'Recipe name is required'));
    }
    try {
        const data = await searchRecipeByName(name);
        handleSuccess(res, data);
    } catch (error) {
        handleError(res, error);
    }
};

const findRecipe = async (req, res) => {
    const { ingredient } = req.query;
    if (!ingredient) {
        return res.status(400).json(new ApiResponse(400, 'Ingredient is required'));
    }
    try {
        const data = await findRecipeByIngredient(ingredient);
        handleSuccess(res, data);
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = {
    searchRecipe,
    findRecipe
};
