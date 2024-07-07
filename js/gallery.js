const allCategories = document.querySelectorAll("ul#categories li.item");

const numberOfCategories = allCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);

allCategories.forEach((category) => {
  const header = category.querySelector("h2").textContent;
  const numberItems = category.querySelectorAll("li").length;
  console.log(`Category: ${header}`);
  console.log(`Elements: ${numberItems}`);
});
