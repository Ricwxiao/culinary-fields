import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { name } = useParams();

    const recipes = [
        { 
            id: 1, 
            name: 'Stir-Fried-Bittermelon', 
            user: 'Goya Farm (Sara)', 
            likes: '1k+', 
            category: 'Chinese', 
            image: 'Stir_Fried_Bittermelon.png', 
            description: [
                "Gather the ingredients.",
                "To prepare the bitter melon, cut in half lengthwise.",
                "Remove and discard the seeds using a small metal spoon.",
                "Cut on the diagonal into 1/4-inch slices.",
                "Degorge the bitter melon by sprinkling salt over the slices and placing them in a colander to drain for 15 minutes.",
                "In a small bowl, mash the minced garlic and chili pepper flakes together.",
                "Heat wok over medium-high heat, then add 2 tablespoons of neutral oil.",
                "When the oil is hot, add the minced garlic and chili mixture.",
                "Stir-fry briefly until aromatic, about 30 seconds.",
                "Add the bitter melon.",
                "Stir-fry for about 2 minutes, then add the soy sauce and red wine or balsamic vinegar.",
                "Stir in the sugar.",
                "Cook for another 2 to 3 minutes, or until the bitter melon is browning and beginning to soften.",
                "Stir in a few drops of sesame oil if desired and serve."
            ], 
            ingredients: ['Bittermelon', 'Soy sauce', 'Garlic', 'Sugar', 'Vinegar'] 
        },
        { 
            id: 2, 
            name: 'Stir-Fried-Bok-Choy', 
            user: 'Wayne Wang', 
            likes: '2k+', 
            category: 'Chinese', 
            image: 'Stir_Fried_Bok Choy.png', 
            description: [
                "Prepare all ingredients.",
                "Heat the oil in a wok or large skillet over medium-high heat.",
                "Add garlic and stir until fragrant.",
                "Add bok choy and stir-fry for 2 minutes.",
                "Pour in oyster sauce and cover for 1 minute or until tender.",
                "Serve immediately."
            ],
            ingredients: ['Bok Choy', 'Garlic', 'Oyster Sauce'] 
        },
        { 
            id: 3, 
            name: 'Better-Than-Takeout:-Kung-Pao-Chicken', 
            user: 'Kung Pao King', 
            likes: '3k+', 
            category: 'Chinese', 
            image: 'Kung_Pao_Chicken.png', 
            description: [
                "Marinate the chicken with soy sauce and cornstarch.",
                "Heat oil in a wok and add peanuts, stir-frying until golden.",
                "Add chili peppers and stir briefly until they start to puff up.",
                "Add the marinated chicken and stir-fry until cooked.",
                "Mix in green onions and additional sauce (soy sauce, vinegar, sugar), cooking until the sauce thickens.",
                "Serve hot with rice."
            ], 
            ingredients: ['Chicken', 'Peanuts', 'Chili Peppers', 'Green Onions'] 
        },
        { 
            id: 4, 
            name: 'Korean-Rice-Bowl', 
            user: 'Son', 
            likes: '4k+', 
            category: 'Korean', 
            image: 'Korean_rice_bowl.png', 
            description: [
                "Prepare the ingredients.",
                "Cook rice according to package instructions.",
                "In a skillet, cook beef until browned.",
                "Add mixed vegetables and gochujang to the beef, cooking until vegetables are tender.",
                "Serve beef and vegetable mixture over rice."
            ], 
            ingredients: ['Rice', 'Beef', 'Mixed Vegetables', 'Gochujang'] 
        },
        { 
            id: 5, 
            name: 'Asian-Fusion-Salad', 
            user: 'Healthy Eats', 
            likes: '1.5k+', 
            category: 'Other', 
            image: 'image 9.png', 
            description: [
                "Prepare the mixed greens and place in a large bowl.",
                "Dice the mango and avocado, then add to the bowl.",
                "Sprinkle sesame seeds over the salad.",
                "Toss the salad gently to combine.",
                "Serve with your favorite dressing."
            ],
            ingredients: ['Mixed Greens', 'Mango', 'Sesame Seeds', 'Avocado'] 
        }
    ];

    const recipeDetail = recipes.find(r => r.name.replace(/\s+/g, '-') === name);

    const [checkedIngredients, setCheckedIngredients] = useState([]);

    const handleCheck = (ingredient) => {
        setCheckedIngredients(prev => {
            if (prev.includes(ingredient)) {
                return prev.filter(item => item !== ingredient);
            } else {
                return [...prev, ingredient];
            }
        });
    };

    if (!recipeDetail) {
        return <div>No recipe found.</div>;
    }

    return (
        <div className="recipe-detail" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={`/imgs/${recipeDetail.image}`} alt={recipeDetail.name} style={{ width: '50%', marginRight: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '5px' }} />
            <div>
                <h1>{recipeDetail.name.replace(/-/g, ' ')}</h1>
                <p><strong>User:</strong> {recipeDetail.user}</p>
                <p><strong>Likes:</strong> {recipeDetail.likes}</p>
                <div><strong>Ingredients:</strong></div>
                <ul>
                    {recipeDetail.ingredients.map(ingredient => (
                        <li key={ingredient}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={checkedIngredients.includes(ingredient)}
                                    onChange={() => handleCheck(ingredient)}
                                />
                                {ingredient}
                            </label>
                        </li>
                    ))}
                </ul>
                <div><strong>Steps:</strong></div>
                <ol>
                    {recipeDetail.description.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default RecipeDetails;



