function loadCategory(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data) =>  displayCategories(data.categories))
}


function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response)=> response.json())
    .then((data) =>  displayVideos(data.videos))
}

function displayCategories (categories){
    const categoryContainer = document.getElementById('category-container')
    for (let cat of categories){
        console.log('cat');

    const categoryDiv = document.createElement("div")
    categoryDiv.innerHTML = `<button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>`

    categoryContainer.append(categoryDiv)
    }
    
}

const displayVideos =(videos) => {
    const videoContainer = document.getElementById("video-container")

    videos.forEach((videos) => {
        const videoCard = document.createElement("div")
        videoCard.innerHTML = `
        <div class="bg-base-100  shadow-sm">
  <figure>
    <img
      src="${videos.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="text-xl">${videos.title} </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        `
        videoContainer.append(videoCard)
    });
}

loadCategory()

loadVideos()
