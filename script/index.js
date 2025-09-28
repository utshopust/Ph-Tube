function loadCategories() {
  // 1. Fetch The Data

  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // 2. Convert promise to JSON
    .then((res) => res.json())
    // 3. Send data to Display Category.
    .then((data) => displayCategories(data.categories));
}

// Load Video Categories
// {
//     "category_id": "1001",
//     "video_id": "aaah",
//     "thumbnail": "https://i.ibb.co/hY496Db/coloer-of-the-wind.jpg",
//     "title": "Colors of the Wind",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/6r4cx4P/ethen-clack.png",
//             "profile_name": "Ethan Clark",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "233K",
//         "posted_date": "16090"
//     },
//     "description": "Ethan Clark's 'Colors of the Wind' is a vibrant musical exploration that captivates listeners with its rich, expressive melodies and uplifting rhythm. With 233K views, this song is a celebration of nature's beauty and human connection, offering a soothing and enriching experience for fans of heartfelt, nature-inspired music."
// }

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}

// build displayVideos by using arrow function

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  for (let video of videos) {
    console.log(video);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `;
    // Append
    videoContainer.append(videoCard);
  }
};

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
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;

    // append the Element
    categoryContainer.append(categoryDiv);
  }
}
// call the loadCategories function
loadCategories();

// call the loadVideos function
loadVideos();
