import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { name } = useParams();

    const recipes = [
        { id: 1, name: 'Stir-Fried-Bittermelon', user: 'Goya Farm (Sara)', likes: '1k+', category: 'Chinese', image: 'Stir_Fried_Bittermelon.png' },
        { id: 2, name: 'Stir-Fried-Bok-Choy', user: 'Wayne Wang', likes: '2k+', category: 'Chinese', image: 'Stir_Fried_Bok Choy.png' },
        { id: 3, name: 'Better-Than-Takeout:-Kung-Pao-Chicken', user: 'Kung Pao King', likes: '3k+', category: 'Chinese', image: 'Kung_Pao_Chicken.png' },
        { id: 4, name: 'Korean-Rice-Bowl', user: 'Son', likes: '4k+', category: 'Korean', image: 'Korean_rice_bowl.png' },
        { id: 5, name: 'Asian-Fusion-Salad', user: 'Healthy Eats', likes: '1.5k+', category: 'Other', image: 'image 9.png' }
    ];

    const recipeDetail = recipes.find(r => r.name.replace(/\s+/g, '-') === name);

    if (!recipeDetail) {
        return <div>No recipe found.</div>;
    }

    return (
        <div className="recipe-detail">
            <h1>{recipeDetail.name.replace(/-/g, ' ')}</h1>
            <img src={`/imgs/${recipeDetail.image}`} alt={recipeDetail.name} style={{ width: '100%' }} />
            <p><strong>User:</strong> {recipeDetail.user}</p>
            <p><strong>Likes:</strong> {recipeDetail.likes}</p>
            <p>Description about the recipe...</p>
        </div>
    );
};

export default RecipeDetails;
