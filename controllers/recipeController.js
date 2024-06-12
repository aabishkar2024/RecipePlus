const {
  searchRecipeByName,
  findRecipeByIngredient,
  listMealCategories,
  listMealAreas,
  listIngredients,
  getRandomMeal,
  getVeganRecipes,
  getVegetarianRecipes,
  getGlutenFreeRecipes,
} = require("../services/recipeService");
const { handleSuccess, handleError } = require("../utils/responseHandler");
const ApiResponse = require("../utils/apiResponse");

const searchRecipe = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res
      .status(400)
      .json(new ApiResponse(400, "Recipe name is required"));
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
    return res.status(400).json(new ApiResponse(400, "Ingredient is required"));
  }
  try {
    const data = await findRecipeByIngredient(ingredient);
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
};

const getMealCategories = async (req, res) => {
  try {
    const data = await listMealCategories();
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
};

const getMealAreas = async (req, res) => {
  try {
    const data = await listMealAreas();
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
};

const getIngredients = async (req, res) => {
  try {
    const data = await listIngredients();
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
};

const getRandomMeals = async (req, res) => {
  try {
    const data = await getRandomMeal();
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
};

const getDietaryRecipes = async (req, res) => {
  const { diet } = req.query;
  if (!diet) {
    return res
      .status(400)
      .json(new ApiResponse(400, "Dietary restriction is required"));
  }

  try {
    let data;
    switch (diet.toLowerCase()) {
      case "vegan":
        data = await getVeganRecipes();
        break;
      case "vegetarian":
        data = await getVegetarianRecipes();
        break;
      case "gluten-free":
        data = await getGlutenFreeRecipes();
        break;
      default:
        return res
          .status(400)
          .json(new ApiResponse(400, "Invalid dietary restriction"));
    }
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  searchRecipe,
  findRecipe,
  getMealCategories,
  getMealAreas,
  getIngredients,
  getRandomMeals,
  getDietaryRecipes,
};
