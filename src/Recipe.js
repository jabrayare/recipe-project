import React from "react";
import Ingredients from "./Ingredients.css";
import NumberFormat from "react-number-format";
function Recipe({ title, calories, image, ingredients }) {
  const generateIngredients = (e) => {
    console.log("ingredints >>>", ingredients);
  };
  return (
    <div className="flip-card">
      <div className="flip-inner-card">
        <div className="flip-front-card">
          <div className="recipe">
            <h1 className="title">{title}</h1>
            <p className="calories">
              Calories Count:
              <NumberFormat
                className="formatNum"
                value={Math.floor(calories)}
                thousandSeparator={true}
                displayType="text"
              />
            </p>
            <img className="image" src={image} alt="pictures" />
          </div>
        </div>
        <div className="flip-back-card">
          <button onClick={generateIngredients} className="ingBtn">
            View Ingredients
          </button>
          <div className="ingredient_card">
            <table>
              <thead>
                <th>Ingredients</th>
                <th>Wieghts</th>
              </thead>

              {ingredients.length != 0 ? (
                ingredients.map(({ text, weight }) => (
                  <tr>
                    <td>{text}</td>
                    <td>
                      <NumberFormat
                        value={Math.floor(weight)}
                        thousandSeparator={true}
                        displayType="text"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <p>it is not found</p>
              )}
            </table>
          </div>
          <img className="fliped_picture" src={image} alt="picture" />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
