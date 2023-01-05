import React, { useState } from 'react';
import MealList from "./MealList";

function MealPlanner(){
    const [foodData, setFoodData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function changeFunction(e) {
        setCalories(e.target.value);
    }

    function getFoodData() {
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=136fd3eda6a94007bc63eff543914377&timeFrame=day&targetCalories=${calories}`
        )
            .then((response) => response.json())
            .then((data) => {
                setFoodData(data);
                console.log(data);
            })
            .catch(() => {
                console.log("error");
            });
    }

    return (
        <div className="MealPlanner">
            <section className="Title">
                <h1>Meal Planner</h1>
            </section>

            <section className="controls">
                <input
                    type="number"
                    placeholder="Calories (numerical value)"
                    onChange={changeFunction} 
                />
                <button onClick={getFoodData}>Load Tomorrows Meal Plan</button>
            </section>
            {foodData && <MealList foodData={foodData} />}
        </div>
    );
}

export default MealPlanner;