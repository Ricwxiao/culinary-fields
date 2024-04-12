import React, { useState } from "react";

export function RecipeCard({ name, user, likes }) {
  return (
    <div className="recipe-card">
      <div className="recipe-image"></div>
      <div className="recipe-info">
        <h3 className="recipe-title">{name}</h3>
        <div className="user-info">
          <div className="avatar"></div>
          <p className="user-name">{user}</p>
        </div>
        <p className="recipe-likes">{likes}</p>
      </div>
    </div>
  );
};

function Recipe() {
  const categories = ['All', 'Chinese', 'Japanese', 'Korean', 'Thai', 'Other'];
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const recipes = [
    { id: 1, name: 'Stir Fried Bittermelon', user: 'Goya Farm (Sara)', likes: '1k+', category: 'Chinese', image: 'Stir_Fried_Bittermelon.png' },
    { id: 2, name: 'Stir Fried Bok Choy', user: 'Wayne Wang', likes: '2k+', category: 'Chinese', image: 'Stir_Fried_Bok Choy.png' },
    { id: 3, name: 'Better Than Takeout: Kung Pao Chicken', user: 'Kung Pao King', likes: '3k+', category: 'Chinese', image: 'Kung_Pao_Chicken.png' },
    { id: 4, name: 'Korean Rice Bowl', user: 'Son', likes: '4k+', category: 'Korean', image: 'Korean_rice_bowl.png' },
    { id: 5, name: 'Asian Fusion Salad', user: 'Healthy Eats', likes: '1.5k+', category: 'Other', image: 'image 9.png' },
  ];
  
  useState(() => {
    setFilteredRecipes(recipes);
  }, []);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setFilteredRecipes(recipes.filter(recipe => category === 'All' || recipe.category === category));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    setFilteredRecipes(recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery.toLowerCase())));
  };

  return (
    <div className="recipe-container">
    <section className="featured-dish">
      <div className="carousel featured-dish-container">
        <img src="/imgs/Stir_Fried_Bittermelon.png" alt="Featured dish" />
        <p className="featured-dish-text">Weekly Featured Dishes: Stir Fried Bittermelon</p>
      </div>
    </section>
      <section className="filter-section">
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${activeFilter === category ? 'active' : ''}`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="search-and-post">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search for recipe"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="search-btn" onClick={handleSearch}>
              🔍
            </button>
          </div>
          <button className="post-button">Post</button>
        </div>
      </section>
      <section className="recipe-list">
        {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} name={recipe.name} user={recipe.user} likes={recipe.likes} image={recipe.image} />
        ))}
      </section>
    </div>
  );
}

export default Recipe;
