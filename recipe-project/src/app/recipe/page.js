import RecipeList from "@/components/ui/rrecipe-list";
import React from "react";

const fetchListOfRecipe = async () => {
  try {
    const recipeList = await fetch("https://dummyjson.com/recipes");
    const res = await recipeList.json();
    return res?.recipes;
  } catch (error) {
    throw new Error(error);
  }
};

const Recipe = async () => {
  const recipeListData = await fetchListOfRecipe();
  return <RecipeList recipeList={recipeListData} />;
};

export default Recipe;
