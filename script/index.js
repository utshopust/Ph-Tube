function loadCategories() {
  // Fetch The Data

  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

// display the categories
function displayCategories(categories){
    console.log(categories);
}

loadCategories();
