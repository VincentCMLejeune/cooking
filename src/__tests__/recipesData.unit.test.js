import { recipes } from "../recipesData/recipesData";

describe("All recipes names are formated as a string", () => {
  let names = [];
  let lowerCaseNames = [];
  for (let recipe of recipes) {
    names.push(recipe.name);
    lowerCaseNames.push(recipe.lowerCaseName);
  }
  test("all recipes name are string", () => {
    let res = names.every((name) => typeof name === "string");
    expect(res).toBe(true);
  });
  test("all recipes lowercase name are string", () => {
    let res = lowerCaseNames.every((name) => typeof name === "string");
    expect(res).toBe(true);
  });
});

describe("All keys are numbers and unique", () => {
  let keys = [];
  for (let recipe of recipes) {
    keys.push(recipe.key);
  }
  test("all recipes keys are numbers", () => {
    let res = keys.every((key) => typeof key === "number");
    expect(res).toBe(true);
  });
  test("all keys are unique", () => {
    let uniqueKeys = [...new Set(keys)];
    expect(uniqueKeys).toStrictEqual(keys);
  });
});

describe("All recipes ingredients are corectly formated", () => {
  let quantifiedIngredients = [];
  let unquantifiedIngredients = [];
  for (let recipe of recipes) {
    for (let ingredient of recipe.ingredients) {
      if (ingredient.length === 1) {
        unquantifiedIngredients.push(ingredient);
      } else if (ingredient.length === 2) {
        quantifiedIngredients.push(ingredient);
      } else {
        throw new Error("ingredient length is wrong");
      }
    }
  }
  test("quantified items are correctly formatted", () => {
    let areFirstNumbers = quantifiedIngredients.every(
      (ingredient) => typeof ingredient[0] === "number"
    );
    expect(areFirstNumbers).toBe(true);
    let areSecondStrings = quantifiedIngredients.every(
      (ingredient) => typeof ingredient[1] === "string"
    );
    expect(areSecondStrings).toBe(true);
  });
  test("unquantified items are correctly formatted", () => {
    let areFirstStrings = quantifiedIngredients.every(
      (ingredient) => typeof ingredient[1] === "string"
    );
    expect(areFirstStrings).toBe(true);
  });
});

describe("All recipes base persons ingredients are correctly formatted", () => {
  let persons = [];
  for (let recipe of recipes) {
    persons.push(recipe.basePersonsIngredients);
  }
  test("all recipes base persons are numbers", () => {
    let res = persons.every((person) => typeof person === "number");
    expect(res).toBe(true);
  });
  test("all recipes base persons are positive", () => {
    let res = persons.every((person) => person > 0);
    expect(res).toBe(true);
  });
});

describe("All recipes steps are correctly formatted", () => {
  let recipes = [];
  for (let recipe of recipes) {
    recipes.push(recipe.recipe);
  }
  test("all recipes have at least one step", () => {
    let res = recipes.every((recipe) => recipe.length > 0);
    expect(res).toBe(true);
  });
  test("all recipes step are strings", () => {
    let res = recipes.every((recipe) => {
      for (let step of recipe) {
        if (typeof step !== "string") {
          return false;
        }
      }
      return true;
    });
    expect(res).toBe(true);
  });
});

describe("All boolean parameters are correctly formatted", () => {
  let vegetarians = [];
  let quicks = [];
  let tuppables = [];
  for (let recipe of recipes) {
    vegetarians.push(recipe.isVegetarian);
    quicks.push(recipe.isQuick);
    tuppables.push(recipe.isTuppable);
  }
  test("all vegetarian parameters are booleans", () => {
    let res = vegetarians.every(
      (vegetarian) => typeof vegetarian === "boolean"
    );
    expect(res).toBe(true);
  });
  test("all quick parameters are booleans", () => {
    let res = quicks.every((quick) => typeof quick === "boolean");
    expect(res).toBe(true);
  });
  test("all tuppable parameters are booleans", () => {
    let res = tuppables.every((tuppable) => typeof tuppable === "boolean");
    expect(res).toBe(true);
  });
});
