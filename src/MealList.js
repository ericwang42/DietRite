import React from 'react';
import Meal from "./Meal";

export default function MealList({ foodData }) {
    const nutrients = foodData.nutrients;
    console.log(foodData);
    
    return (
        <main>
            <section className="nutrients">
                <h1>Macronutrients</h1>
                <ul>
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Fats: {nutrients.fat.toFixed(0)}</li>
                    <li>Protein: {nutrients.protein.toFixed(0)}</li>
                    
                </ul>
            </section>

            <section className = "meals">
                {foodData.meals.map((meal) => {
                    return <Meal key ={meal.id} meal={meal} />;
                })}
            </section>
        </main>
    )
}