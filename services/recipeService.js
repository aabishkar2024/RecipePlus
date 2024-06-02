const axios = require('axios');
const { API_BASE_URL } = require('../config/config');

const searchRecipeByName = async (recipeName) => {
    const response = await axios.get(`${API_BASE_URL}/search.php?s=${recipeName}`);
    return response.data;
};

const findRecipeByIngredient = async (ingredient) => {
    const response = await axios.get(`${API_BASE_URL}/filter.php?i=${ingredient}`);
    return response.data;
};

module.exports = {
    searchRecipeByName,
    findRecipeByIngredient
};
