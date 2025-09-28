function loadCategories() {
  // 1. Fetch The Data

  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // 2. Convert promise to JSON
    .then((res) => res.json())
    // 3. Send data to Display Category.
    .then((data) => displayCategories(data.categories));
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }

// display the categories
function displayCategories(categories) {
  // Get the Container
  const categoryContainer = document.getElementById("category-container");
  
  
  // loop operation on Array of object
  for (let cat of categories) {
    console.log("cat are :", cat);
    
    
    // Create Element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML=`
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `
   
    // append the Element
    categoryContainer.append(categoryDiv);
  }
}

loadCategories();
