function loadCategory(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data) =>  displayCategories(data.categories))
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

loadCategory()
