import React from "react"
import Style from "./receipe.module.css"

const Receipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={Style.receipe}>
      <h1>{title}</h1>
      <p>{calories}</p>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
        {/* {ingredients
        (ingredient => (
          <li>{ingredient.text}</li>
        ))} */}
      </ol>
      <img className={Style.image} src={image} alt="" />
    </div>
  )
}

export default Receipe
