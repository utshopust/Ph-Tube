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
// load categoryWise Videos

const loadCategoryVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickButton = document.getElementById(`btn-${id}`);
      clickButton.classList.add("active");
      displayVideos(data.category)
    });
};

// build displayVideos by using arrow function

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  // remove other videos when click on other category
  videoContainer.innerHTML = "";

  if (videos.length === 0) {
    videoContainer.innerHTML = `
    <div class="col-span-full flex flex-col justify-center items-center text-center py-20">
        <img class="w-[120px]" src="assets/Icon.png" alt="Opps icon" />
        <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
      </div>
    `;
    return;
  }
  for (let video of videos) {
    console.log(video);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
     <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[250px] object-cover" src="${video.thumbnail}" alt="Shoes" />
          <span
            class="absolute bottom-2 right-2 text-sm rounded text-white bg-black px-2"
            >3hrs 56 min ago</span
          >
        </figure>

        <div class="py-5 flex gap-3 px-0">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>

          <div class="intro">
            <h2 class="text-sm font-semibold">Midnight Serenade</h2>
            <p class="text-sm text-gray-400 flex gap-1">
              ${video.authors[0].profile_name}
              <img class="w-5 h-5"
                src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"
                alt=""
              />
            </p>
            <p class="text-sm text-gray-400">${video.others.views}</p>
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
    // console.log("cat are :", cat);

    // Create Element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;

    // append the Element
    categoryContainer.append(categoryDiv);
  }
}
// call the loadCategories function
loadCategories();
