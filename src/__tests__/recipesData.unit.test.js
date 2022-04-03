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
