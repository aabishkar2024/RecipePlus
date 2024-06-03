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

const listMealCategories = async () => {
    const response = await axios.get(`${API_BASE_URL}/categories.php`);
    return response.data;
};

const listMealAreas = async () => {
    const response = await axios.get(`${API_BASE_URL}/list.php?a=list`);
    return response.data;
};

const listIngredients = async () => {
    const response = await axios.get(`${API_BASE_URL}/list.php?i=list`);
    return response.data;
};


const getRandomMeal = async () => {
    const response = await axios.get(`${API_BASE_URL}/random.php`);
    return response.data;
};


module.exports = {
    searchRecipeByName,
    findRecipeByIngredient,
    listMealCategories,
    listMealAreas,
    listIngredients,
    getRandomMeal
};
