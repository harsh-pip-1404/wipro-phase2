import axios from 'axios';

const API_URL = 'https://localhost:7139/api/Recipes/';

class RecipeService {
    getAllRecipes() {
        return axios.get(API_URL);
    }

    getRecipeById(id) {
        return axios.get(API_URL + id);
    }

    createRecipe(formData) {
        return axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    updateRecipe(id, formData) {
        return axios.put(API_URL + id, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    deleteRecipe(id) {
        return axios.delete(API_URL + id);
    }
}

export default new RecipeService();
