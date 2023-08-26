import mock from "./mock_recipe.json"

export default function RecipePost({params}) {
  const recipe = mock;
  console.log(recipe);
  const { rid } = params;
  return (
    <main>
      <div>
        <h1>{ recipe.name }</h1>
        <span>{recipe.author} </span>
        <span>{recipe.creationDate}</span>
        <p>{recipe.summary}</p>
      </div>
      <div>
        {/* comes in as a list of objects with name, quantity and unit */}
        <h1>Ingredients</h1>
        <ul></ul>
      </div>
      <div>
        {/* comes in as an array of strings where each string should be treated as a pragraph */}
        <h1>Steps</h1>
        <ul></ul>
      </div>
    </main>
  )
}